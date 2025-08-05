"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedLessons: Set<string>;
  completedQuizzes: Set<string>;
  markLessonComplete: (lessonId: string) => void;
  markQuizComplete: (quizId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isQuizCompleted: (quizId: string) => boolean;
  getCompletionPercentage: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<string>>(new Set());
  
  // Local Storage'dan verileri yükle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLessons = localStorage.getItem('completedLessons');
      const savedQuizzes = localStorage.getItem('completedQuizzes');
      
      if (savedLessons) {
        try {
          const lessonIds = JSON.parse(savedLessons);
          setCompletedLessons(new Set(lessonIds));
        } catch (error) {
          console.error('Error loading saved lessons:', error);
        }
      }
      
      if (savedQuizzes) {
        try {
          const quizIds = JSON.parse(savedQuizzes);
          setCompletedQuizzes(new Set(quizIds));
        } catch (error) {
          console.error('Error loading saved quizzes:', error);
        }
      }
    }
  }, []);

  // Local Storage'a kaydet
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedLessons', JSON.stringify(Array.from(completedLessons)));
    }
  }, [completedLessons]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedQuizzes', JSON.stringify(Array.from(completedQuizzes)));
    }
  }, [completedQuizzes]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const markQuizComplete = (quizId: string) => {
    setCompletedQuizzes(prev => new Set([...prev, quizId]));
  };

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.has(lessonId);
  };

  const isQuizCompleted = (quizId: string) => {
    return completedQuizzes.has(quizId);
  };

  const getCompletionPercentage = () => {
    // 16 hafta x 3 ders + 16 quiz = 64 toplam item
    const totalItems = 64;
    const completedItems = completedLessons.size + completedQuizzes.size;
    return Math.round((completedItems / totalItems) * 100);
  };

  const resetProgress = () => {
    setCompletedLessons(new Set());
    setCompletedQuizzes(new Set());
    if (typeof window !== 'undefined') {
      localStorage.removeItem('completedLessons');
      localStorage.removeItem('completedQuizzes');
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        completedQuizzes,
        markLessonComplete,
        markQuizComplete,
        isLessonCompleted,
        isQuizCompleted,
        getCompletionPercentage,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

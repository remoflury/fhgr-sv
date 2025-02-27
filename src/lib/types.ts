import type { Component } from "svelte";

export type TaskProps = {
  title: string;
  description: string;
  points: number;
  difficulty: "easy" | "medium" | "advanced",
  more?: {
    title: string,
    component: Component
  }
}
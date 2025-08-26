# Angular State Management Button

A clean, practical implementation of the **State Pattern** (a Gang of Four design pattern) in Angular to demonstrate finite state management for a UI component.

## 🚀 Live Demo

[Add a link here if you have the app deployed on GitHub Pages, Vercel, Netlify, etc.]

## 📖 Overview

This project features a button component that cycles through three distinct states (`Idle`, `Loading`, `Success`), each with its own behavior, styling, and disabled status. It's a perfect example of how to decouple state-specific logic from the component itself, making the code more maintainable, scalable, and testable.

## 🏗️ Architecture & Pattern: The State Pattern

The solution is built around the classic **State Pattern**:
- **`StateInterface`**: The contract that all states must implement (`getText`, `getDisabled`, `handleClicked`, `getColor`).
- **Concrete States** (`IdleService`, `LoadingService`, `SuccessService`): Services that implement the interface, encapsulating the behavior for each state.
- **Context** (`StateService` and `StateButtonComponent`): The `StateService` acts as a factory and registry for states, while the component holds the current state and delegates all UI logic to it.

## ✨ Features

- **Easy Extensibility**: Adding a new state (e.g., `ErrorState`) requires only creating a new service and adding it to the registry.
- **Type Safety**: Full TypeScript support with a defined `StateInterface` and `ButtonStateName` type.
- **Dependency Injection**: Leverages Angular's DI system to manage state instances cleanly.

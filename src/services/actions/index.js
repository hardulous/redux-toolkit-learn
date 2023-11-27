import { createAction } from "@reduxjs/toolkit";

export const clearAllUsers = createAction("clearAllUsers")

// createAction() is a utility function provided by Redux Toolkit to create action creators. It simplifies the process of defining action types and generating action creators with minimal boilerplate code. Instead of manually writing action type constants and action creator functions, you can use createAction to create both in a single step.

// createAction(type) takes a single argument, which is the action type. It returns an action creator function that, when called, produces actions with the specified type and payload.
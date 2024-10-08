# @bharatsharma19/user-input-parser

A lightweight package for parsing and validating user input with [Zod](https://github.com/colinhacks/zod), providing schemas for common user-related operations like sign-up, sign-in, user updates, and deletion.

## Features

- **Sign-up Input Validation**: Ensure that user registration data is valid.
- **Sign-in Input Validation**: Validate credentials for login attempts.
- **Update User Input Validation**: Manage optional updates to user profiles.
- **Delete User Input Validation**: Verify user IDs for deletion requests.

## Installation

Install the package via npm:

```bash
npm install @bharatsharma19/user-input-parser --registry=https://npm.pkg.github.com/
```

## Usage

Import the necessary schemas and use them to validate incoming data in your application.

### Sign-up Input Validation

```typescript
import { signUpInput, SignUpType } from "@bharatsharma19/user-input-parser";

const userData = {
  email: "test@example.com",
  password: "password123",
  username: "testuser",
  name: "Test User",
  contact: "1234567890",
};

// Validate input
const result = signUpInput.safeParse(userData);

if (!result.success) {
  console.log(result.error); // Handle validation errors
} else {
  const validatedData: SignUpType = result.data;
  console.log("Valid user data:", validatedData);
}
```

### Sign-in Input Validation

```typescript
import { signInInput, SignInType } from "@bharatsharma19/user-input-parser";

const credentials = {
  email: "test@example.com",
  password: "password123",
};

const result = signInInput.safeParse(credentials);

if (!result.success) {
  console.log(result.error); // Handle validation errors
} else {
  const validatedData: SignInType = result.data;
  console.log("Valid credentials:", validatedData);
}
```

### Update User Input Validation

```typescript
import {
  updateUserInput,
  UpdateUserType,
} from "@bharatsharma19/user-input-parser";

const updateData = {
  userId: "550e8400-e29b-41d4-a716-446655440000",
  username: "newusername",
};

const result = updateUserInput.safeParse(updateData);

if (!result.success) {
  console.log(result.error); // Handle validation errors
} else {
  const validatedData: UpdateUserType = result.data;
  console.log("Valid update data:", validatedData);
}
```

### Delete User Input Validation

```typescript
import {
  deleteUserType,
  DeleteUserType,
} from "@bharatsharma19/user-input-parser";

const deleteData = {
  userId: "550e8400-e29b-41d4-a716-446655440000",
};

const result = deleteUserType.safeParse(deleteData);

if (!result.success) {
  console.log(result.error); // Handle validation errors
} else {
  const validatedData: DeleteUserType = result.data;
  console.log("Valid delete data:", validatedData);
}
```

## Schemas

The following schemas are included in the package:

- `signUpInput`: Validates sign-up data (`email`, `password`, `username`, `name`, `contact`).
- `signInInput`: Validates sign-in data (`email`, `password`).
- `updateUserInput`: Validates update data (`userId`, `password`, `username`, `name`, `contact`).
- `deleteUserType`: Validates delete requests (`userId`).

## Types

The following TypeScript types are inferred from the schemas:

- `SignUpType`
- `SignInType`
- `UpdateUserType`
- `DeleteUserType`

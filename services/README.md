# Services Directory


This directory contains all API-related services, schemas, types, and utilities for the Obodo mobile app.

## Structure

```
services/
├── api/
│   ├── mutations/
│   │   ├── auth.api.mutations.ts       # Authentication API functions
│   │   └── useAuthMutations.ts         # React Query hooks for auth
│   └── queries/                        # API query functions (future)
├── schemas/
│   └── auth.schema.ts                  # Zod validation schemas for auth
└── types/                              # TypeScript types (future)
```

## Setup

### 1. Environment Variables

Create a `.env` file in the project root with the following:

```env
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

For production:
```env
EXPO_PUBLIC_API_URL=https://api.yourdomain.com
```

### 2. React Query Setup

Make sure React Query is set up in your root layout (already done in `app/_layout.tsx`):

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
    </QueryClientProvider>
  );
}
```

## Authentication API

### Available Mutations

#### 1. Login (`useLogin`)
```tsx
import { useLogin } from '@/services/api/mutations/useAuthMutations';

const LoginScreen = () => {
  const { mutate: login, isPending, isError, error } = useLogin();

  const handleLogin = (data: LoginInput) => {
    login(data, {
      onSuccess: (response) => {
        console.log('Logged in:', response.data.user);
      },
      onError: (error) => {
        Alert.alert('Error', error.message);
      },
    });
  };

  return (
    <Button 
      onPress={handleLogin}
      loading={isPending}
      disabled={isPending}
    />
  );
};
```

#### 2. Register (`useRegister`)
```tsx
import { useRegister } from '@/services/api/mutations/useAuthMutations';

const RegisterScreen = () => {
  const { mutate: register, isPending } = useRegister();

  const handleRegister = (data: RegisterInput) => {
    register(data);
  };

  return (
    <Button 
      onPress={handleRegister}
      loading={isPending}
    />
  );
};
```

#### 3. Forgot Password (`useForgotPassword`)
```tsx
import { useForgotPassword } from '@/services/api/mutations/useAuthMutations';

const ForgotPasswordScreen = () => {
  const { mutate: sendResetEmail, isPending } = useForgotPassword();

  const handleForgotPassword = (data: ForgotPasswordInput) => {
    sendResetEmail(data, {
      onSuccess: (response) => {
        Alert.alert('Success', response.message);
      },
    });
  };
};
```

#### 4. Reset Password (`useResetPassword`)
```tsx
import { useResetPassword } from '@/services/api/mutations/useAuthMutations';

const ResetPasswordScreen = ({ token }: { token: string }) => {
  const { mutate: resetPassword, isPending } = useResetPassword();

  const handleResetPassword = (data: ResetPasswordInput) => {
    resetPassword({ data, token });
  };
};
```

#### 5. Logout (`useLogout`)
```tsx
import { useLogout } from '@/services/api/mutations/useAuthMutations';

const ProfileScreen = () => {
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
};
```

#### 6. Verify Email (`useVerifyEmail`)
```tsx
import { useVerifyEmail } from '@/services/api/mutations/useAuthMutations';

const VerifyEmailScreen = ({ token }: { token: string }) => {
  const { mutate: verifyEmail } = useVerifyEmail();

  useEffect(() => {
    verifyEmail(token);
  }, [token]);
};
```

## API Functions

### Direct API Functions (without hooks)

If you need to call the API functions directly without React Query hooks:

```tsx
import {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
  logoutUser,
} from '@/services/api/mutations/auth.api.mutations';

// Example
const handleLogin = async () => {
  try {
    const response = await loginUser({ email, password });
    console.log(response.data.user);
  } catch (error) {
    console.error(error);
  }
};
```

## Validation Schemas

All authentication forms use Zod schemas for validation:

```tsx
import { 
  loginSchema, 
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '@/services/schemas/auth.schema';

// With react-hook-form
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const { control, handleSubmit } = useForm({
  resolver: zodResolver(loginSchema),
});
```

## Token Management

The API mutations automatically handle token storage (commented out by default). To enable:

1. Install `expo-secure-store`:
```bash
npx expo install expo-secure-store
```

2. Uncomment token storage code in `auth.api.mutations.ts`:
```tsx
import * as SecureStore from 'expo-secure-store';

// In loginUser function
if (response.data.success && response.data.data.token) {
  await SecureStore.setItemAsync('authToken', response.data.data.token);
}
```

3. Set up the auth interceptor in your root layout:
```tsx
import { setupAuthInterceptor } from '@/services/api/mutations/auth.api.mutations';
import * as SecureStore from 'expo-secure-store';

// In your root layout
useEffect(() => {
  setupAuthInterceptor(async () => {
    return await SecureStore.getItemAsync('authToken');
  });
}, []);
```

## API Response Types

### AuthResponse
```typescript
{
  success: boolean;
  data: {
    user: {
      id: string;
      email: string;
      fullname: string;
      avatar?: string;
    };
    token: string;
    refreshToken?: string;
  };
  message: string;
}
```

### MessageResponse
```typescript
{
  success: boolean;
  message: string;
}
```

## Expected API Endpoints

The authentication mutations expect the following backend endpoints:

- `POST /auth/login` - Login user
- `POST /auth/register` - Register new user
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password with token
- `POST /auth/logout` - Logout user
- `POST /auth/verify-email` - Verify email with token
- `POST /auth/refresh-token` - Refresh authentication token

## Error Handling

All mutations include comprehensive error handling:

```tsx
const { mutate, error, isError } = useLogin();

// Option 1: Handle in component
if (isError) {
  console.error(error.message);
}

// Option 2: Handle in mutation callback
mutate(data, {
  onError: (error) => {
    Alert.alert('Error', error.message);
  },
});
```

## Testing

To test with a mock API, update your `.env`:

```env
EXPO_PUBLIC_API_URL=http://your-mock-api-url/api
```

Or use tools like:
- [MSW (Mock Service Worker)](https://mswjs.io/)
- [JSON Server](https://github.com/typicode/json-server)
- [Mockoon](https://mockoon.com/)

## Adding More Mutations

To add more API mutations (e.g., for posts, events, profile):

1. Create the API function in `services/api/mutations/[feature].api.mutations.ts`
2. Create React Query hooks in `services/api/mutations/use[Feature]Mutations.ts`
3. Create validation schemas in `services/schemas/[feature].schema.ts`
4. Use in your feature screens

## Best Practices

1. **Always use the hooks** (`useLogin`, `useRegister`, etc.) in React components
2. **Use direct functions** (`loginUser`, `registerUser`, etc.) only in non-React contexts
3. **Handle loading states** with `isPending` from hooks
4. **Display errors** to users with `Alert.alert()` or toast notifications
5. **Validate forms** with Zod schemas before submitting
6. **Store tokens securely** using `expo-secure-store`
7. **Clear sensitive data** on logout

## Future Enhancements

- [ ] Add request/response interceptors for global error handling
- [ ] Implement token refresh logic
- [ ] Add offline support with React Query persistence
- [ ] Implement biometric authentication
- [ ] Add analytics tracking for auth events
- [ ] Create custom error classes for better error handling


# Authentication API endpoints

## Login

<h3>Endpoint</h3>

**POST** `/api/auth/login/`

<h3>Description</h3>

This endpoint authenticates a user using their username and password. Upon successful authentication, it returns an access token and sets a refresh token in a cookie.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **username** (string, required): The username of the user.
- **password** (string, required): The password of the user.

<h3>Request Example</h3>

```json
{
  "username": "userexample",
  "password": "securepassword123"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "access": "your access token",
  "refresh": "always empty",
  "user": {
    "pk": "primary key of user",
    "username": "username",
    "email": "email",
    "first_name": "first name",
    "last_name": "last name"
  }
}
```

<h5>Cookies</h5>

- **refresh_token**: An HTTP-only cookie containing the refresh token.

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "non_field_errors": [
    "Невозможно войти в систему с указанными учётными данными."
  ]
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "non_field_errors": ["Должно включать \"username\" и \"password\"."]
}
```

---

## Logout

<h3>Endpoint</h3>

**POST** `/api/auth/logout/`

<h3>Description</h3>

The Logout endpoint is used to log the user out of the system. This involves invalidating the user's session or token, ensuring they can no longer access protected resources until they log in again.

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Успешно вышли."
}
```

---

## Password Reset

<h3>Endpoint</h3>

**POST** `/api/auth/password/reset/`

<h3>Description</h3>

This endpoint allows a user to request a password reset. An email will be sent to the specified address with instructions on how to reset the password.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **email** (string, required): The email of the user.

<h3>Request Example</h3>

```json
{
  "email": "user@examp.le"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Письмо с инструкциями по восстановлению пароля выслано."
}
```

<h4>Error Responses</h4>

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "email": ["Обязательное поле."]
}
```

---

## Password Reset Confirm

<h3>Endpoint</h3>

**POST** `/api/auth/password/reset/confirm/`

<h3>Description</h3>

This endpoint allows a user to confirm their password reset request by providing a unique identifier (UID), a token, and the new password (entered twice for confirmation).

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **uid** (string, required): Primary key of the user.
- **token** (string, required): Token sended to email.
- **new_password1** (string, required): New password for the user.
- **new_password2** (string, required): Confirmation of `new_password1`.

<h3>Request Example</h3>

```json
{
  "uid": "1",
  "token": "token",
  "new_password2": "securepassword123",
  "new_password2": "securepassword123"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Пароль изменён на новый."
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "uid": ["Invalid value"],
  "token": ["Invalid value"],
  "new_password2": ["Введенные пароли не совпадают."]
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "new_password1": ["Обязательное поле."],
  "new_password2": ["Обязательное поле."],
  "uid": ["Обязательное поле."],
  "token": ["Обязательное поле."]
}
```

---

## Password Change

<h3>Endpoint</h3>

**POST** `/api/auth/password/change/`

<h3>Description</h3>

This endpoint allows an authenticated user to change their current password. The user must provide their current password and the new password (entered twice for confirmation).

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **new_password1** (string, required): New password for the user.
- **new_password2** (string, required): Confirmation of `new_password1`.

<h3>Request Example</h3>

```json
{
  "new_password1": "securepassword1234",
  "new_password2": "securepassword1234"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Новый пароль сохранён."
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `401 Unauthorized`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Учетные данные не были предоставлены."
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "new_password1": ["Обязательное поле."],
  "new_password2": ["Обязательное поле."]
}
```

---

## Get User

<h3>Endpoint</h3>

**GET** `/api/auth/user/`

<h3>Description</h3>

his endpoint retrieves the details of the authenticated user. It returns the user's profile information such as username, email, and other relevant details.

<h3>Request Headers</h3>

The request should include the following parameters in the headers:

- **access** (string, required): JWT Access Token.

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "pk": "primary key of user",
  "username": "username",
  "email": "email",
  "first_name": "first name",
  "last_name": "last name"
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `401 Unauthorized`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Учетные данные не были предоставлены."
}
```

---

## Verify Access Token

<h3>Endpoint</h3>

**POST** `/api/auth/token/verify/`

<h3>Description</h3>

This endpoint verifies the validity of a given authentication token. It is used to ensure that the token provided by the user is still active and valid.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **token** (string, required): JWT Access Token.

<h3>Request Example</h3>

```json
{
  "token": "your access token",
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `401 Unauthorized`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Token is invalid or expired",
  "code": "token_not_valid"
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "token": [
    "Обязательное поле."
  ]
}
```

---

## Refresh Access Token

<h3>Endpoint</h3>

**POST** `/api/auth/token/refresh/`

<h3>Description</h3>

This endpoint allows a user to refresh their authentication token. It is used to obtain a new access token using a valid refresh token.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **refresh** (string, required): JWT Refresh Token.

<h3>Request Example</h3>

```json
{
  "refresh": "your refresh token"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MTA0OTYxLCJpYXQiOjE3MTcxMDQ2MjIsImp0aSI6IjkxNTI4OWEzZjA2YzRmMDVhNjhmZTY4NzczYjMxOTMzIiwidXNlcl9pZCI6MX0.D38NsEWuaElZGSDK573mt_mwRpS1S3xj4jYlXU7hJ4c",
  "access_expiration": "2024-05-30T21:36:01.170144Z"
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `401 Unauthorized`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Token is invalid or expired",
  "code": "token_not_valid"
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `401 Unauthorized`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "No valid refresh token found.",
  "code": "token_not_valid"
}
```

---

## Registration

<h3>Endpoint</h3>

**POST** `/api/auth/registration/`

<h3>Description</h3>

This endpoint allows a new user to create an account. The user must provide a username, email, and password.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **username** (string, required): The username of the user.
- **email** (string, required): The email of the user.
- **password1** (string, required): The password of the user.
- **password2** (string, required): Confirmation of `password1`.

<h3>Request Example</h3>

```json
{
  "username": "userexample",
  "email": "user@examp.le",
  "password1": "securepassword123",
  "password2": "securepassword123"
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MTA1NDEwLCJpYXQiOjE3MTcxMDUxMTAsImp0aSI6ImI2ZTM4OTNiYjJiMzRiMzI4YjgwNjJlYzJiYTkzZGRjIiwidXNlcl9pZCI6Mn0.gyHPZPkTGYNIMB96GFv_RIKN_Q3g9MycfTnajhht-pY",
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzE5MTUxMCwiaWF0IjoxNzE3MTA1MTEwLCJqdGkiOiI2NjUxZmU1MTE5NTc0MzU2ODQzY2MyOGUwZjhiOGYzZiIsInVzZXJfaWQiOjJ9.0z5lkyq-LbKylNmcZngClIaydsQbdt3HfjbNkmxy9Os",
  "user": {
    "pk": 2,
    "username": "userexample",
    "email": "user@examp.le",
    "first_name": "",
    "last_name": ""
  }
}
```

<h5>Cookies</h5>

- **refresh_token**: An HTTP-only cookie containing the refresh token.

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "username": [
    "Пользователь с таким именем уже существует."
  ],
  "non_field_errors": [
    "Пароли не совпадают."
  ]
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "username": [
    "Обязательное поле."
  ],
  "email": [
    "Обязательное поле."
  ],
  "password1": [
    "Обязательное поле."
  ],
  "password2": [
    "Обязательное поле."
  ]
}
```

---

## Registration Verify Email

<h3>Endpoint</h3>

**POST** `/api/auth/registration/verify-email/`

<h3>Description</h3>

This endpoint allows a user to verify their email address. The user must provide a unique token that was sent to their email as part of the email verification process.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **key** (string, required): The username of the user.

<h3>Request Example</h3>

```json
{
  "key": "key",
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "ок"
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `404 Not Found`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "Страница не найдена."
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `400 Bad Request`</h5>

<h5>Response Body</h5>

```json
{
  "key": [
    "Обязательное поле."
  ]
}
```

---

## Registration Resend Email

<h3>Endpoint</h3>

**POST** `/api/auth/registration/resend-email/`

<h3>Description</h3>

This endpoint allows a user to request a new email verification token if they did not receive the original one or if it has expired.

<h3>Request Parameters</h3>

The request should include the following parameters in the body:

- **email** (string, required): The username of the user.

<h3>Request Example</h3>

```json
{
  "email": "user@examp.le",
}
```

<h3>Responses</h3>

<h4>Success Response</h4>

<h5>Status Code `200 OK`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "ок"
}
```

<h4>Error Responses</h4>

<h5>Invalid Credentials</h5>

<h5>Status Code `200 Ok`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "ок"
}
```

<h5>Missing Parameters</h5>

<h5>Status Code `200 Ok`</h5>

<h5>Response Body</h5>

```json
{
  "detail": "ок"
}
```

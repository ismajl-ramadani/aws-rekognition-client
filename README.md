# How to run the app

Make sure that your node version is >= 14.0

1. Install node packages with npm or yarn
2. Create a new env file at the following path
```
apps/api/.env
```
3. Add the credentials in this format (will send the credentials in the email)
```
NX_ACCESS_KEY_ID=
NX_SECRET_ACCESS_KEY=
```

4. Serve the api project
```
nx serve api
```

5. Serve the ui project
```
nx serve case
```

After that, you can see the app through the http://localhost:4200/ link
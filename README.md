<p align="center">  
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#anchor-structure">Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#movie_camera-screenshots">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

# :house: Welcome to "Trello Clone" Project!

The project is an application to help people to manage tasks. It is a kind of facilitator to help the user managing tasks on the mobile application saving the data in a concept offline first.

To see the result [click here](https://google.com/).

#Expo #Realm #react-native #MongoDB

## :rocket: Technologies

This project was developed at the [NotJust.Dev](https://www.youtube.com/watch?v=WiXs0JbA3_k) youtube channel based on the technologies:

- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Realm & MongoDB](https://www.mongodb.com/developer/)

## :anchor: Structure

We are using **Expo** to create a "React-Native" application to help the users to manage tasks on Android and IOS. In this application the user can log in the app, register a task, edit and delete.

We are using **Realm** to create a local schema applying the concepts of offline first and with internet saving the data on cloud using the MongoDB. The data are isolated by users with **MongDB authentication** and **MongoDB Roles**.

## :movie_camera: Screenshots
  
<p align="center">
  <img src="demo-resize.gif" alt="animated" />
</p>

| Home | Task Added | Task Added 2| Login | Profile|Task Details|
| - | - | - | -|-|-|
| <img src="https://github.com/user-attachments/assets/ce272625-9383-4822-bc5b-2f8fcb0e05d8" width="200"> | <img src="https://github.com/user-attachments/assets/2ba7deae-48d4-4edc-a945-e4f8a50d4e16" width="200"> |<img src="https://github.com/user-attachments/assets/3a913db6-6bda-4140-8f68-d4613bd78f92" width="200">|<img src="https://github.com/user-attachments/assets/fc9ebc98-842a-41f6-9c38-a9ac2929d566" width="200">|<img src="https://github.com/user-attachments/assets/7bc9641d-8a1c-4f76-915a-624f7428e377" width="200">|<img src="https://github.com/user-attachments/assets/8600a20c-5fd6-4396-af8e-6c7a567d24b9" width="200">|

|MongoDB Cloud|
| - |
|<img src="https://github.com/user-attachments/assets/a8f32662-ce42-48ca-9e81-fb2cdd3efe9d">|




## :electric_plug: Install

To install use the command below:

- npm install
- yarn install
- expo install
- npm install -g eas-cli
- npx expo prebuild
- npx expo install realm @realm/react
- eas build --profile development --platform android
- *This command will generate a apk installable on android as a dev mode

- npm start -- --clear
  * This command will generate a QRCode that should be read by the device that has the application installed as development mode

- Android App deployed on expo: https://expo.dev/artifacts/eas/5HoJCyovzCRkDT8RNxpnpP.aab

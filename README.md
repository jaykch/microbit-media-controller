Micro:bit Music Controller  &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jaykch/microbit-media-controller/blob/master/LICENSE)
=======
  <h3 align="center">Check out the demo on youtube</h3>

  <p align="center">
    An awesome project to control your media keys through micro:bit buttons and gesture control!
    <br />
    <a href="https://youtu.be/CM8lSN1KUtg">View Demo</a>
    ·
    <a href="https://github.com/jaykch/microbit-media-controller/issues">Report Bug</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Deployment](#deployment)
* [Demo](#demo-and-description)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgments)

## About The Project
This controller connects the BBC Micro:bit with a windows pc and acts like a media controller.
It has the following functions

* **Play:**  Ability to play/pause music, videos etc. 
* **Mute:**  Ability to mute/unmute system volume
* **Next:**  Acts as the next button on a keyboard
* **Previous:**  Acts as the previous button on a keyboard
* **Volume Up:**  Increases system volume
* **Volume Down:**  Decreases system volume 

### Built With
This project uses the following software and languages
* [Javascript](https://www.javascript.com/)
* [MakeCode for micro:bit](https://makecode.microbit.org/)
* [WebStorm IDE](https://www.jetbrains.com/webstorm/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Here is the list of all the prerequisites you would need to install on your system in order to run this device
* Node.js v10.15.3
```sh
https://nodejs.org/en/download/
```
* npm
```sh
https://www.npmjs.com/get-npm
```
* Python
```sh
https://www.python.org/downloads/
```

* Additional build tools are required to be able to run media keys on windows. Run these commands from an 
administrative shell to install software dependencies:
<br/><br/>**_Note:_** _You need to install windows build tools version 4.0 or higher_ <br/><br/>
```sh
npm install --global --production windows-build-tools
npm install -g node-gyp
```

### Installation
1. Add all dependencies using npm
    ```sh
    npm install
    ```
2. Connect your micro:bit to the computer using a USB stick

3. Run port file to check what port your micro:bit is connected to
    ```sh
    node port.js
    ```
    You will get your com port as below: 
    <br/><br/>
    ![Port Image](assets/port.PNG?raw=true "Port")
    
4.  Change port in server.js file 
    <br/><br/>
    ![Com Change](assets/com-change.PNG?raw=true "Com")
    
5. Run node server to start communicating with your micro:bit
    ```sh
    node server.js
    ```
**_Note:_** _You still need to deploy the hex file to your micro:bit. These steps only install the server. Please go through the deployment below to start using your micro:bit._

## Deployment

Copy the Micro:bit Music Controller hex file to your micro:bit and Enjoy!

## Demo and Description
Check out the demo on youtube here - <a href="https://youtu.be/CM8lSN1KUtg">View Demo</a> <br/><br/>

Below is a list of all controls and gestures for each function
* **Play/Pause:** 
    `Use button a to toggle between play and pause`
        ![Button Layout](assets/buttons.png?raw=true "Buttons")

    1. When you press button a the system starts playing media and displays the below image <br/>  
    ![Play LEDs](assets/play.PNG?raw=true "Play")<br/><br/>
    1. When you press button a again the system pauses the media<br/>  
    ![Pause LEDs](assets/pause.PNG?raw=true "Pause")
    
* **Mute/Unmute:**
    `Use button a to toggle between play and pause`
        ![Button Layout](assets/buttons.png?raw=true "Buttons")

    1. When you press button b it mutes the volume <br/>  
    ![Mute LEDs](assets/mute.PNG?raw=true "Mute")<br/><br/>
    1. When you press button b again it unmutes the system<br/>  
    ![Unmute LEDs](assets/playing.PNG?raw=true "Unmute")
    
* **Next:**  
    `Tilt your micro:bit to the right to go to next track` <br/><br/>
        ![Tilt Right](assets/next.PNG?raw=true "Next")<br/><br/>
     If you ware playing any music on Spotify/Windows it will play the next track and show the below LEDs on successful 
     change<br/><br/> 
        ![Next LEDs](assets/forward.PNG?raw=true "Previous")<br/><br/>
     
* **Previous:**
    `Tilt your micro:bit to the left to go to next track` <br/><br/>
        ![Tilt Left](assets/previous.PNG?raw=true "Previous")<br/><br/>
    If you ware playing any music on Spotify/Windows it will play the previous track and show the below LEDs on 
    successful change<br/><br/>
        ![Previous LEDs](assets/backward.PNG?raw=true "Previous")<br/><br/> 
       
* **Volume Up:**
    `Tilt your micro:bit upwards to increase volume` <br/><br/>
        ![Tilt Up](assets/up.PNG?raw=true "Up")<br/><br/>
    This gesture will increase system volume and show a plus sign on micro:bit<br/><br/>
        ![Plus LEDs](assets/plus.PNG?raw=true "Previous")<br/><br/>
    
* **Volume Down:**
    `Tilt your micro:bit downwards to decrease volume` <br/><br/>
        ![Tilt Down](assets/down.PNG?raw=true "Down")<br/><br/>
    This gesture will reduce system volume and show a minus sign on micro:bit<br/><br/>
        ![Minus LEDs](assets/minus.PNG?raw=true "Previous")<br/><br/>

## Author
* **Jay Kumar** - *Complete Development* - [jaykch.com](http://www.jaykch.com/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE) file for details

## Acknowledgments

* [Serialport](https://serialport.io/) - Library for serial communication to micro:bit
* [Robotjs](http://robotjs.io/) - Library to simulate key-presses

# Free-Hosting
It is a platform that makes use of Node.js, Express.js, MongoDB, AWS and Pulumi to allow the users to host their static sites and web services on AWS without directly interacting with it.

<img src="https://img.shields.io/github/languages/code-size/this-is-shreya/free-hosting" alt="image"> <img src="https://img.shields.io/github/repo-size/this-is-shreya/free-hosting" alt="image"> <img src="https://img.shields.io/github/languages/count/this-is-shreya/free-hosting" alt="image"> <img src="https://img.shields.io/github/languages/top/this-is-shreya/free-hosting" alt="image">
<img src="https://img.shields.io/github/watchers/this-is-shreya/free-hosting?style=flat" alt="image">
<img src="https://img.shields.io/github/forks/this-is-shreya/free-hosting" alt="image"> <img src="https://img.shields.io/github/stars/this-is-shreya/free-hosting" alt="image">

## Features and Interfaces

1. Landing Page
   
   <img width="659" alt="free-hosting-landing" src="https://github.com/this-is-shreya/free-hosting/assets/62089952/6238d693-14e8-41d6-a5a9-3cd3a277a562">


2. Home Page
   
Lists all the deployed static sites and services

   <img width="960" alt="freehosting-homepage" src="https://github.com/this-is-shreya/free-hosting/assets/62089952/b9e203dd-bcae-417d-b4fd-5051f6474930">

3. Web service

   <img width="657" alt="free-hosting-web-service" src="https://github.com/this-is-shreya/free-hosting/assets/62089952/29642628-c2de-48ae-add0-91d322c5a29f">


4. Static site

   <img width="662" alt="free-hosting-static" src="https://github.com/this-is-shreya/free-hosting/assets/62089952/b47c45a1-0385-48f7-9f56-c0dd124f875b">



## Tech Stack

[![Tech Stack](https://skills.thijs.gg/icons?i=mongodb,nodejs,js,bootstrap,aws)](https://skills.thijs.gg)
<img src="https://github.com/this-is-shreya/free-hosting/assets/62089952/d2c7309d-97dc-4119-be0c-0eaf036a1446" width="160"/>

## Instructions

1. Clone <code>https://github.com/this-is-shreya/free-hosting.git</code>
2. <code>cd free-hosting</code>
3. <code>npm install</code>
4. Create 2 empty folders named userApp and userAppStatic.
5. Create a .env file.
6. Follow <a href="https://www.knowband.com/blog/user-manual/get-github-client-id-client-secret-api-details/">this</a> to get your github client ID and secret. Once you get it, add it under **GITHUB_CLIENT_ID** and **GITHUB_CLIENT_SECRET** in your .env file.
7. Create a repository on AWS ECR and save the repository's ARN under **ECR** and the repository's name under **ECR_REPO_NAME** in your .env file.
8. Create a cluster on AWS ECS and save its cluster name under **ECS_CLUSTER_NAME** in your .env file.
9. Lastly, create a security group and allow HTTP port 80 connection on all IPv4 and IPv6 addresses for both, inbound and outbound rules. Once created, edit the inbound rules and add another HTTP port 80 connection that points to your security group. Follow <a href="https://www.youtube.com/watch?v=o7s-eigrMAI&pp=ygUHYXdzIGVjcw%3D%3D">this</a> for more details. Once done, add the security group ID under **SECURITY_GROUP** in your .env file.
10. Install and setup Pulumi CLI and create a new stack.
11. Set docker host using the command <code>pulumi config set docker:host tcp://127.0.0.1:8080</code>
   Replace the tcp link with your docker URL.
12. Similarly, set AWS region using the command <code>pulumi config set aws:region eu-north-1</code>
   Replace "eu-north-1" with your specific AWS region.
13. Start your docker engine.
14. Run <code>node server.js </code>


## Need help?

Feel free to contact me on <a href="https://www.linkedin.com/in/this-is-shreya">LinkedIn</a>

[![Instagram](https://img.shields.io/badge/Instagram-Follow-blue)](https://www.instagram.com/this_is_code_cafe/)
[![Youtube](https://img.shields.io/badge/Youtube-Follow-red)](https://youtube.com/this_is_code_cafe/)

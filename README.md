### Architecture
![FinalProject drawio](https://github.com/DavidAlkobi/Nodejs-App/assets/136454939/3c45eebd-8dd8-4500-ba00-95bbd227b0b5)

### Devops Protfilio
This is a DevOps portfolio project that demonstrates the entire software development process, from ideation to continuous integration and delivery, by effectively implementing DevOps methodologies. It highlights the importance of DevOps practices in software development.

### Project Repos
Source Code
infrastructure & Gitops (https://github.com/DavidAlkobi/Infra_Nodejs)

###Project Details
The project employs various technologies and methodologies:
Front-end: Bootstrap, CSS, HTML, and jQuery are used for developing the website's front-end.
Back-end: Flask is used to create a REST API to connect with the website's front-end.
Database: MongoDB is used to store and manage data in the application.
Testing: Docker Compose with Pytest is employed for testing the application, allowing for early detection of potential issues.
CI/CD: GitHub Actions are used to automate the Continuous Integration and Delivery processes, resulting in a faster and more efficient development cycle.
Deployment: A Helm chart was created for the application, enabling easy deployment with ArgoCD.
Git stragey
main based development
main is the production branch
feature are developed on feateure/* branches
CI tags new version based on the recent tags
Documentation Sources
Docker & Docker-Compose
Nginx
K8S
Helm
mongoDB
Bitnami-Charts
Terraform
GCP
ArgoCD
GitHubActionthe application

    docker build -t my-app:1.0 .       
    
The dot "." at the end of the command denotes location of the Dockerfile.



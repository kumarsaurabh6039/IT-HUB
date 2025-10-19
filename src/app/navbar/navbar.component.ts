import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Flag for the upcoming batches dropdown
  isBatchesDropdownOpen = false;
  
  // Boolean flag to manage the state of the success stories panel
  isSuccessPanelOpen = false;
  
  // To store the currently selected story for the modal
  selectedStory: any = null;

  // Data for upcoming batches
  upcomingBatches = [
    {
      courseName: 'Full Stack Java Development',
      startDate: 'November 15, 2025',
      description: 'Master frontend and backend technologies with our comprehensive Java course.',
      imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      courseName: 'Data Science & Machine Learning',
      startDate: 'December 01, 2025',
      description: 'Unlock the power of data with Python, TensorFlow, and advanced ML models.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      courseName: 'Cloud Computing & DevOps',
      startDate: 'December 10, 2025',
      description: 'Learn AWS, Azure, and CI/CD pipelines to become a certified cloud professional.',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  // Dummy data for success stories with longer paragraphs
  successStories = [
    {
      id: 1,
      name: 'Rohan Sharma',
      company: 'Google',
      image: 'https://placehold.co/100x100/EFEFEF/333?text=RS',
      logo: 'https://cdn.jsdelivr.co/npm/simple-icons@v3/icons/google.svg',
      title: 'From a Small Town to Google\'s HQ',
      fullStory: 'Rohan started his journey with a dream bigger than his small town could contain. He joined our intensive full-stack development bootcamp, where he dove deep into modern technologies like React, Node.js, and cloud deployment. He was relentless in his pursuit of knowledge, often spending late nights mastering complex algorithms and building personal projects. His dedication, combined with personalized mentorship from our senior instructors, prepared him for the rigorous Google interviews. Today, he works as a Software Engineer at Google\'s headquarters, contributing to products used by millions. His story is a powerful testament to the idea that with the right guidance and unwavering determination, no goal is too distant.'
    },
    {
      id: 2,
      name: 'Priya Verma',
      company: 'Microsoft',
      image: 'https://placehold.co/100x100/F0E68C/333?text=PV',
      logo: 'https://cdn.jsdelivr.co/npm/simple-icons@v3/icons/microsoft.svg',
      title: 'Cracking the Code to Microsoft',
      fullStory: 'Priya was always fascinated by the stories data could tell. As a star student in our data science program, she distinguished herself with her keen analytical mind and passion for machine learning. She led a capstone project that involved developing a predictive model for customer churn with over 95% accuracy, showcasing her ability to handle complex datasets. She mastered Python, TensorFlow, and advanced statistical modeling. This practical experience was crucial in helping her stand out. Now, as a Data Scientist at Microsoft, Priya is at the forefront of AI innovation, developing intelligent solutions that shape the future of technology.'
    },
     {
      id: 3,
      name: 'Amit Singh',
      company: 'Amazon',
      image: 'https://placehold.co/100x100/ADD8E6/333?text=AS',
      logo: 'https://cdn.jsdelivr.co/npm/simple-icons@v3/icons/amazon.svg',
      title: 'Delivering Success at Amazon',
      fullStory: 'Amit specialized in the backbone of modern tech: DevOps and Cloud Computing. He understood that reliable, scalable infrastructure is what allows great software to thrive. In our program, he gained hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines, automating deployments and optimizing cloud resource management. His problem-solving skills and deep understanding of system architecture were exactly what Amazon was looking for. As a Cloud Engineer on the AWS team, he now helps maintain the massive, world-spanning infrastructure that powers countless businesses, ensuring reliability and performance at an incredible scale.'
    }
  ];

  // Methods to control the dropdown
  openBatchesDropdown() { this.isBatchesDropdownOpen = true; }
  closeBatchesDropdown() { this.isBatchesDropdownOpen = false; }
  
  // Method to toggle the success stories panel
  toggleSuccessPanel() {
    this.isSuccessPanelOpen = !this.isSuccessPanelOpen;
    if (this.isSuccessPanelOpen || this.selectedStory) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }

  // Method to open the story detail modal
  viewStory(story: any) {
    this.selectedStory = story;
    this.isSuccessPanelOpen = false; // Close the panel
    document.body.classList.add('body-no-scroll'); // Ensure scroll lock
  }

  // Method to close the story detail modal
  closeStoryModal() {
    this.selectedStory = null;
    document.body.classList.remove('body-no-scroll');
  }
}

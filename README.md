
---

## **Tech Stack**
 ## **Backend**

Language: Java

Framework: Spring Boot

Database: MySQL

Security: Spring Security + JWT

Build Tool: Maven

## **Frontend**

Library: React.js

Routing: React Router DOM

State Management: React Context API

Styling: Bootstrap

PDF Generation: jsPDF + jsPDF-AutoTable


## **Tools**

IDE: IntelliJ IDEA (Backend), VS Code (Frontend)

API Testing: Postman

Database GUI: MySQL Workbench

Version Control: Git & GitHub

## **Features & Flow**

1. **Authentication**
   - Users and Admins register/login using JWT authentication.
   - Role-based routing ensures correct access (User vs Admin dashboards).

2. **Admin Dashboard**
   - View all products.
   - Apply discounts that immediately reflect on User Dashboard.
   - Add/delete products.

3. **User Dashboard**
   - Browse products with images, prices, and discount applied.
   - Add items to the cart.
   - View cart summary with total.

4. **Checkout**
   - Displays order summary.
   - Confirms order and generates a PDF invoice using jsPDF.

5. **Invoice/Bill**
   - Lists items purchased, prices, and total.
   - “Pay & Download PDF” button generates invoice for the user.

---

## **Installation & Setup**

### **Backend**
1. Navigate to backend folder:
```bash
cd backend





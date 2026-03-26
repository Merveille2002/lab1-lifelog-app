# 🎬🍳 LifeLog Hub – Movie & Recipe Recommender

## 📌 Description

LifeLog Hub est une application web full-stack permettant aux utilisateurs de :

* 🔍 Rechercher des films et des recettes
* 🤖 Générer des recommandations personnalisées grâce à une IA
* 💾 Sauvegarder leurs recommandations dans une base de données MongoDB
* 🗑️ Gérer (ajouter / supprimer) leurs historiques

L'application combine API externes, intelligence artificielle et stockage local.

---

## 🛠️ Technologies utilisées

### Backend

* Node.js
* Express.js
* MongoDB (local)
* Axios
* OpenRouter API (IA)

### Frontend

* React.js
* Axios
* CSS moderne (UI responsive)

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Merveille2002/lab1-lifelog-app

```

---

### 2. Installer les dépendances

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## 🔑 Configuration

Créer un fichier `.env` dans le dossier **backend** :

```env
OMDB_API_KEY=your_key
SPOON_API_KEY=your_key
OPENROUTER_API_KEY=your_key
MONGO_URI=mongodb://127.0.0.1:27017/lifelog
```

---

## 🗄️ Base de données

L’application utilise **MongoDB en local**.

### Démarrer MongoDB :

```bash
mongod
```

Les données seront stockées dans la base :

```
lifelog
```

Collection :

```
recommendations
```

---

## ▶️ Lancer l'application

### 1. Backend

```bash
cd backend
node index.js
```

Serveur disponible sur :

```
http://localhost:5000
```

---

### 2. Frontend

```bash
cd frontend
npm start
```

Application disponible sur :

```
http://localhost:3000
```

---

## 🚀 Fonctionnalités

### 🎬 Films

* Recherche via API OMDb
* Sélection de films
* Génération IA selon :

  * humeur
  * temps disponible
  * compagnie

---

### 🍳 Recettes

* Recherche via API Spoonacular
* Sélection de recettes
* Génération IA selon :

  * régime
  * budget
  * niveau
  * temps 
  * Nombre de personnes

---

### 🤖 IA

* Utilisation de OpenRouter (GPT)
* Génération de recommandations personnalisées
* Réponses textuelles dynamiques

---

### 💾 CRUD

* Ajouter une recommandation
* Afficher l’historique
* Supprimer une recommandation



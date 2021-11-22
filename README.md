# NAICS Companies list

NAICS Companies list is a single page web application that provides the functionality to login, signup and view companies list. Companies can be sorted by name and can be filtered via search field. All the operations are being done asynchronously and page will never reload.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


* Ruby version
 2.5.8

 ```
 rvm install 2.5.8
 ```
* Database
postgresql

```
brew install postgres
```


* Clone the repository


```
mkdir NAICS

cd NAICS

git clone https://github.com/usmanasif/avamia-code-challenge.git

cd avamia-code-challenge
```

* Install Gems
```
bundle install
```

* Database creation

```
  rails db:create
  rails db:migrate
```

* Populate Database with companies data
```
  rake dataload:load_naics
  rake dataload:load_companies
```
* Copy .env.example file and add the values of ENV
```
cp .env.example .env
```

* Run app locally on 3000 port

```
rails server
```

it will run the app on this url. Visit it and you can play with it
http://localhost:3000/

### Workflow and functionality

- User login in app
- User signup in app
- User can see the all companies list on root page
- User can filter companies by name
- User can sort companies by name

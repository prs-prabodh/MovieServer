# MEAN stack tutorial project #

## Backend ##

v1.1 - Developed using *Node + Express*. *Mongoose* on top of *MongoDB* serves movie and user data. Data extracted from <a href = 'https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset'>IMDb 5000 movie dataset</a>

v1.0 - Developed using *Django REST Framework*. Django RESTful backend with *SQL database*. Database contains movie and user data. Data extracted from <a href = 'https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset'>IMDb 5000 movie dataset</a>

### Features ###
* Models
* URLs
* Views
* CORS Middlware
* JSON Response
* QuerySets

### Importing data from CSV file ###
Open Django shell and use the following code:

```python
    import csv
    from <your_app_name>.models import <your_model_name>
    file = open('<csv-file-path>', 'rt')
    rows = csv.DictReader(file)
    for row in rows :
        <your_model_name>.(<your_model_attribute_1 = row['<Column_name_of_attribute_1'],....).save()
```

## Frontend ##

v1.0 - Designed and developed using *Angular 7*.

### Features ###
* Components
* Pages
* Services
* Observables
* Pipes/Custom Pipes
* HTTP Requests
* Autocomplete
* Angular Material
* Routing and Navigation
from flask import render_template, request
from app import app
from schedule_api import *

@app.route('/')
def index():
    data = {}

    data['terms'] = get_terms()

    return render_template('index.html', **data)

'''
You should add more functions below to "create pages" (each function preceded 
by '@app.route' represents a page) on your website.

	-	In addition to the information provided in the spec, use the index function
		above as a model for how you might setup the other functions.
	- 	Note some functions will need to have arguments (whereas index does not).
	- 	You may remove this comment when you start.
'''
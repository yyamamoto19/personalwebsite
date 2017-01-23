from flask import render_template, request
from app import app
from schedule_api import *


@app.route('/')
def index():
    data = {}

    data['terms'] = get_terms()

    return render_template('index.html', **data)


	   

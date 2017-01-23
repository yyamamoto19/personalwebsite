from flask import render_template, request
from app import app


@app.route('/')
def index():
    data = {}

    return render_template('index.html', **data)


	   

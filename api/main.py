import time
from flask import Flask, request

app = Flask(__name__)

@app.route('/model', methods=['POST'])
def build():

    if request.method == 'POST':
        domain_name = request.form.get('domain-name')
        language = request.form.get('language')
        version = request.form.get('version')
        uploaded_file = request.files['file']

        print(domain_name, language, version, uploaded_file)
        return {'data': "success"}

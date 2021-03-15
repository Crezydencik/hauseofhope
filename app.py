from flask import Flask, render_template, url_for

app =Flask(__name__)

@app.route("/")
@app.route("/home", methods=['GET','POST'])
def index():
    return render_template("home.html")

@app.route("/Whoweare")
def about():
    return render_template("whoweare.html")

@app.route("/Hope21")
def hope():
    return render_template("hope21.html")

@app.route("/Gallery")
def gallery():
    return render_template("gallery.html")

@app.route("/Activity")
def activity():
    return render_template("activity.html")

@app.route("/Contacts")
def contacs():
    return render_template("contacts.html")

if __name__ == '__main__':
    app.run(debug=True)

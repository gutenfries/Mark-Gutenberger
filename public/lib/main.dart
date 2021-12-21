// import 'dart:ui';
// import 'dart:io';
// import 'package:flutter/cupertino.dart';
// import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
// import 'package:flutter/widgets.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_link_page/constants.dart';

void main() => runApp(const MaterialApp(
      title: "App",
      home: MyApp(),
    ));

class MyApp extends StatefulWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return _portraitMode(context);
  }

  MaterialApp _portraitMode(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Stack(
          children: <Widget>[
            Container(
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(Constants.backgroundImageURl),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Column(
              children: <Widget>[
                _profileImage(context),
                _about(context),
                _links(context),
                _bottomCredits(),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _profileImage(BuildContext context) {
    Size _size = MediaQuery.of(context).size;
    return Column(
      children: <Widget>[
        Container(margin: const EdgeInsets.all(10), width: _size.width < 410 ? 100.0 : 150.0, height: _size.width < 410 ? 100.0 : 150.0, decoration: const BoxDecoration(shape: BoxShape.circle, image: DecorationImage(fit: BoxFit.fill, image: AssetImage(Constants.profileImageUrl)))),
      ],
    );
  }

  Widget _about(BuildContext context) {
    Size _size = MediaQuery.of(context).size;

    return Container(
      padding: const EdgeInsets.all(32),
      child: Row(
        children: [
          Expanded(
            /*1*/
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                /*2*/
                Container(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: Text(
                    'Hello',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      fontSize: _size.width < 300 ? 20.0 : 30.0,
                    ),
                  ),
                ),
                Text(
                  "I'm Piyush Kumar",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: _size.width < 300 ? 16.0 : 20.0,
                  ),
                ),
                Container(
                  margin: const EdgeInsets.all(10),
                  child: Text(
                    'Android Application Developer',
                    style: TextStyle(
                      color: Colors.white70,
                      fontSize: _size.width < 305 ? 12.0 : 16.0,
                    ),
                  ),
                ),
              ],
            ),
          ),
          /*3*/
        ],
      ),
    );
  }

  Widget _links(BuildContext context) {
    return Wrap(
      alignment: WrapAlignment.center,
      children: [
        _buildButtonColumn(Constants.RESUME, context),
        _buildButtonColumn(Constants.LINKEDIN, context),
        _buildButtonColumn(Constants.STACKOVERFLOW, context),
        _buildButtonColumn(Constants.FACEBOOK, context),
        _buildButtonColumn(Constants.INSTAGRAM, context),
        _buildButtonColumn(Constants.GITHUB, context),
      ],
    );
  }

  Column _buildButtonColumn(String label, BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          margin: const EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
          decoration: BoxDecoration(color: Colors.white, border: Border.all(color: Colors.blue), borderRadius: BorderRadius.circular(5.0)),
          child: InkWell(
            onTap: () {
              debugPrint('click on: ' + label);
              _goToPage(label, context);
            },
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Text(
                label,
                style: const TextStyle(fontSize: 12.0, fontWeight: FontWeight.bold),
              ),
            ),
          ),
        ),
      ],
    );
  }

  void _goToPage(String label, BuildContext context) {
    switch (label) {
      case Constants.STACKOVERFLOW:
        {
          _launchInBrowser(Constants.STACKOVERFLOW_URL);
        }
        break;
      case Constants.GITHUB:
        {
          _launchInBrowser(Constants.GITHUB_URL);
        }
        break;
      case Constants.FACEBOOK:
        {
          _launchInBrowser(Constants.FACEBOOK_URL);
        }
        break;
      case Constants.INSTAGRAM:
        {
          _launchInBrowser(Constants.INSTAGRAM_URL);
        }
        break;
      case Constants.LINKEDIN:
        {
          _launchInBrowser(Constants.LINKEDIN_URL);
        }
        break;
      case Constants.RESUME:
        {
          _launchInBrowser(Constants.RESUME_URL);
        }
        break;
      // case Constants.PROJECTS:
      //   {
      // Navigator.push(context, MaterialPageRoute(builder: (context) => new Projects()));
      //   }
      //   break;
    }
  }

  Future<void> _launchInBrowser(String url) async {
    if (await canLaunch(url)) {
      await launch(
        url,
        forceSafariVC: false,
        forceWebView: false,
        headers: <String, String>{'header_key': 'header_value'},
      );
    } else {
      throw 'Could not launch $url';
    }
  }

  Widget _bottomCredits() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: const EdgeInsets.fromLTRB(0, 10.0, 0, 0),
          child: const Text(
            'Made with  ❤  in Flutter',
            style: TextStyle(fontSize: 10.0, color: Colors.white),
          ),
        ),
      ],
    );
  }

  showAlertDialog(BuildContext context, String message) {
    // set up the button
    Widget okButton = TextButton(
      child: const Text("OK"),
      onPressed: () {},
    );

    // set up the AlertDialog
    AlertDialog alert = AlertDialog(
      title: const Text("Alert of orientation"),
      content: Text(message),
      actions: [
        okButton,
      ],
    );

    // show the dialog
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return alert;
      },
    );
  }
}

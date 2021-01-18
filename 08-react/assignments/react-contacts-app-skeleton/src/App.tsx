import React, {Component} from 'react';
import './App.css';
import Contact from "./Contact";

export default class App extends Component {
    state = {
        contacts:
            [{
                id: 1,
                name: "Max Muster",
                img: "profilepic1.jpg"
            }, {
                id: 2,
                name: "Thomas Tester",
                img: "profilepic2.jpg"
            }]
    }

    deleteContact(contact: any) {
        let index = this.state.contacts.indexOf(contact)

        console.log('deleting '+index);
        if (index !== -1) {
            let contacts = this.state.contacts;
            contacts.splice(index, 1)
            let contactsArrayNew = contacts;

            // TODO A new contacts array, with the deleted contact being removed, is computed above. But how do we make this change being rendered? Code for b) goes here

        }
        // ... imagine some logic that removes a contact object from the contacts list
    }
    render() {
        return (
            <div className="App">
                <div>{
                    this.state.contacts.map((contactData) => {
                        return (
                            <Contact
                                // TODO How can we pass the name and image url to the Contact component? code for a) goes here
                                onDelete={(e: any)=>{this.deleteContact(contactData)}}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    }
};



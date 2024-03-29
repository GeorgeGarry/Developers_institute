// Exercise 1 : HTML Form

    // Create a form like the one above. The form should contain three inputs:
    // a small text input asking for a name,
    // a larger textarea input to write a message,
    // a submit input (“Send”)

    // When you click the Send button, the form will be submitted with a GET method. 
    // (you can use the same HTML file for the action url)
    // Where will the sent data appear?

// ▶️▶️▶️ It will appear in the body of the request. not in the address 
// (POST method puts it into the address line)

// Exercise 1 : HTML Form                       END

// Exercise 2 : HTML Form #2

    // Use the same form structure as Exercise 1.
    // When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
    // Where will the sent data appear? Hint : Look at the Network Tab

// ▶️▶️▶️ It will appear in the address text
// Exercise 2 : HTML Form #2                        END



// Exercise 3 : JSON Mario
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

const marioGameJSON = JSON.stringify(marioGame, null, 2);
debugger;
console.log(marioGameJSON);

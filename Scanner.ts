var keys: string = '';
var startTime: number;
var scannerToggle: boolean = false;
/*
Background: A barcode scanner is read the same as a keyboard.
Because of this, it can be hard to seperate keyboard input from scanner.
In order to check if it is a barcode input I will check the speed of the input.
If the speed is under 70 ms, before an enter, then it is likely a barcode.
*/
document.onkeydown = function (evt) {
    if (scannerToggle) {
        if (keys.length == 0) // take the time at the start of the input stream
        {
            startTime = Date.now();
            console.log(startTime);
        }
        if (evt.key === 'Enter') // if it's the end of the input stream
        {
            let endTime: number = Date.now();
            if (endTime - startTime < 70) // if it's under 70ms, we say its a barcode
            {
                console.log("Barcode! " + keys);
            }
            else {
                console.log("Not a Barcode " + keys);
            }
            keys = ''; // reset our current input
            console.log(endTime);
        }
        else // else it is a character in the stream
        {
            keys += evt.key;
        }
        document.getElementById("myText").innerText = keys;
    }
}
//Setter method toggle barcode scanner listener on & off
function toggleScanner(myBool : boolean)
{
    scannerToggle = myBool;
}

/*import { exit } from "process"; // exit
import { createPostGraphileSchema, withPostGraphileContext } from "postgraphile";
import { Pool } from "pg";
import { graphql } from "graphql";

const pgPool = new Pool({
    host: "localhost",
    database: "development",
    //connectionString: "postgres://@localhost:5432/development",
    user: "postgres",
    password: "password",
    port: 5433
});


async function main() {
    const schema = await createPostGraphileSchema(pgPool, ["public"]);
    const query = `{
        allProducts {
            edges {
                node {
                    sku
                    title
                    brand
                    summary
                    price
                    supplier
                }
            }
        }
    }
    `;

    const result: any = await withPostGraphileContext({ pgPool }, async context => {
        return await graphql(schema, query, null, context);
    });
    // console.log(result.data["allProducts"])
    // console.log(result.data);
    result.data!["allProducts"]["edges"].forEach((prod: any) => {
        console.log(prod["node"]);
    });
}


main()
    .then(() => {
        exit(0);
    });
*/
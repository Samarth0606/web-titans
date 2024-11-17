// let rootEl = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerText = "hello from DOM";

// rootEl.appendChild(h1);


// ------------------------------

// let root = document.getElementById('root');

// let div = React.createElement("div" , null , React.createElement(
//     'div' , null , React.createElement('div' , null , React.createElement('div' , null , React.createElement('h1' , null , [])) )
// ));

// let rootEl = ReactDOM.createRoot(root);
// rootEl.render(div)

// ------------------------------

let root = document.getElementById('root');

let div =   <div>
                <div>
                    <div>
                        <h1>i am nested h1 in divs</h1>
                    </div>
                </div>
            </div>

let rootEl = ReactDOM.createRoot(root);
rootEl.render(div)


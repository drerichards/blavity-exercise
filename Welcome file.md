---


---

<h1 id="cox-coding-exercise">Cox Coding Exercise</h1>
<h1 id="application-requirements">Application Requirements:</h1>
<ol>
<li>
<p>Using your preferred JavaScript framework, build a screen which shows a list of hour long slots from 9am to 5pm.</p>
</li>
<li>
<p>When one time slot is clicked, pop up a modal which asks for name and phone number.</p>
</li>
<li>
<p>When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.</p>
</li>
<li>
<p>If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment pre­populated.</p>
</li>
</ol>
<p>Users will be able to edit the name and phone number to change the user for the appointment.</p>
<h1 id="configuration">Configuration</h1>
<ul>
<li>In the root folder, create an .env file with a variable:
<ul>
<li>PORT</li>
</ul>
</li>
<li>yarn or npm install in the terminal</li>
<li>Navigate into the <strong>client</strong> folder</li>
<li>yarn or npm install in the terminal for this folder</li>
<li>You can either run the client alone with <em><strong>yarn start</strong></em> or <em><strong>npm run start</strong></em> Or, move back to the root folder and start the app with <em><strong>yarn dev</strong></em> or <em><strong>npm run dev</strong></em></li>
</ul>
<h1 id="tools">Tools</h1>
<ul>
<li>HTML</li>
<li>ES6 JS</li>
<li>Node/Express</li>
<li>React/PropTypes</li>
<li>CSS/FlexBox</li>
<li>Materialize UI</li>
</ul>
<h1 id="approach">Approach</h1>
<p>The instructions were to create this app with Node and React, however given that it was not a requirement to hook up to a database, no major functionality happens on the back end.</p>
<p>I opted for React without Redux given that I was only managing a minor amount of state and could be stored centrally in the main parent component. State was passed as props and routed back through callback functions. Input validation was utilized as well.</p>
<p>I refactored my code throughout to adhere to the DRY rule and reused components when possible. I also employed React PropTypes to ensure that as props were circulated, that there were checks in place to account for required data. The new React ErrorBoundary feature was also used for error handling and catching mishaps without a full application crash.</p>
<p>The biggest challenge was properly executing manipulation to the Materialize components which were already pre-packaged with their own default styles.</p>


---


---

<h1 id="blavity-coding-exercise">Blavity Coding Exercise</h1>
<h1 id="views">Views</h1>
<p><img src="https://res.cloudinary.com/andrerichards/image/upload/v1536567900/blavity/Screen_Shot_2018-09-10_at_4.17.25_AM.png" alt="Main"></p>
<h1 id="features">Features</h1>
<p>This application can:</p>
<ul>
<li>Retrieve news articles from the <a href="http://newsapi.org">newsapi.org</a> website</li>
<li>Post individual articles to a cloud database</li>
<li>View a list of saved articles fetched from the database</li>
</ul>
<h1 id="configuration">Configuration</h1>
<ul>
<li>You will need an API Key generated from New API</li>
<li>In the root folder, create an .env file with the variables:
<ul>
<li>NEWS_API_KEY=???</li>
<li>DATABASE_URL=mongodb://drerichards:blavity123@ds149742.mlab.com:49742/blavity_news (for mLab)</li>
<li>PORT=???</li>
</ul>
</li>
<li>yarn or npm install in the terminal</li>
<li>Navigate into the <strong>blavity</strong> folder</li>
<li>yarn or npm install in the terminal for this folder</li>
<li>Move back to the root folder and start the app with <em><strong>yarn dev</strong></em> or <em><strong>npm run dev</strong></em></li>
</ul>
<h1 id="functions">Functions</h1>
<p>This coding exercise’s parameters were to:</p>
<ol>
<li>Pulls news articles (any source is fine) in real-time using a news API, such as News API (<a href="https://newsapi.org">https://newsapi.org</a> )</li>
<li>Displays them (title and link) in a reactive list</li>
<li>Provides an option for each article allowing the user to save it for later (only the saving is necessary — no need to provide a view for revisiting saved articles)</li>
</ol>
<h1 id="tools">Tools</h1>
<ul>
<li>HTML</li>
<li>ES6 JS</li>
<li>Node/Express</li>
<li>MongoDB/Mongoose</li>
<li>React/PropTypes</li>
<li>SCSS/CSS</li>
<li>FlexBox</li>
<li>Handlebars</li>
<li>Materialize UI</li>
</ul>
<h1 id="approach">Approach</h1>
<p>I originally built this app with only Node/Express and Handlebars. However, I was not happy with the bland result and scrapped the completed project.</p>
<p>Instead I opted for React and Sass. I felt that in application for the Front End role that I needed to demonstrate my skill. After researching examples of complex grid patterns, I sketched a wireframe layout of how I wanted to display the articles. I then began testing my API requests and formatted the resulting data for easy manipulation.</p>
<p>I refactored my code throughout to adhere to the DRY rule and reused components when possible. I also employed React PropTypes to ensure that as props were circulated, that there were checks in place to account for required data. The new React ErrorBoundary feature was also used for error handling and catching mishaps without a full application crash.</p>
<p>The biggest challenge was properly executing the FlexBox attributes in order to achieve the look of a real world site and do so with as few media queries as possible - not for any particular reason other than to produce something fluid and responsive.</p>
<p>Lastly, the guidelines stated that it was not necessary to display the stored items, but I took it as an invitation to go above and beyond.</p>


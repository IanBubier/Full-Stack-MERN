function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <h3>Career Goals</h3>
                <p>
                Within the field of computer science, I am interested in artificial intelligence, machine learning, and self-mutating code. I also have a longstanding interest in the aerospace and defense industries.
                I plan on pursuing a career that can satisfy both of these curiosities. For instance, developing autopilots for drone aircraft seems like it would be an intriguing and challenging occupation.
                I am not yet committed to that specific job, though, and am still open to exploring the many other applications of software development.
                </p>
            </article>
            <article>
                <h3>Major Technologies Used</h3>
                <dl>
                    <dt><strong>HyperText Markup Language</strong></dt>
                    <dd>HyperText Markup Language (HTML) is the foundational language of web design and offers two equally crucial capabilities. 
                        The first is HyperText, which refers to the ability of HTML documents to link to other HTML documents. This is done by defining a path to the desired page's location on the web server.
                        The second is Markup Language, which defines the structure and content of webpages via declaring individual or nested elements and setting the attributes of those elements. 
                        HTML is not a programming language, however, and so only defines static content.
                    </dd>
                    <dt><strong>JavaScript</strong></dt>
                    <dd>JavaScript (JS) is another language of web design. Unlike HTML, JavaScript is a programming language and thus allows for the incorporation of dynamic elements into web pages.
                        JavaScript programs may be embedded in HTML documents and run directly in the web browser, or run on the web server using programs such as Node.js.
                    </dd>
                    <dt><strong>Cascading Style Sheets</strong></dt>
                    <dd>Cascading Style Sheets (CSS) override the default HTML and JavaScript styles to provide a more appealing and user-friendly appearance to the webpage.
                        This is done by setting the values of various properties associated with different HTML elements. General styles may themselves be overridden by styles set for more specific elements of the web page.
                    </dd>
                    <dt><strong>Node.js</strong></dt>
                    <dd>Node.js, also simply called Node, is an open-source, cross-platform environment for developing and running server-side JavaScript programs. 
                        Node also provides an extensive catalog of modular JavaScript packages, managed by the Node Package Manager, which saves developers the difficulty of writing entire programs from nothing.
                    </dd>
                    <dt><strong>Express.js</strong></dt>
                    <dd>Express.js, also simply called Express, is a framework within Node.js which provides an Application Programming Interface (API). APIs perform the variety of tasks regularly required by web applications.
                        This includes getting, posting, putting, and deleting data, along with defining the routes and ports through which data is moved. 
                    </dd>
                    <dt><strong>MongoDB</strong></dt>
                    <dd>MongoDB is a database management system (DBMS) which manages the storage and organization of saved data required for a web application. 
                        DBMSs commonly store data in a matrix accessed via Structured Query Language (SQL). MongoDB, however, is a document-oriented NoSQL system. 
                        As that description implies, MongoDB instead stores data in document clusters and so does not support SQL. 
                    </dd>
                    <dt><strong>React</strong></dt>
                    <dd>React is an open-source framework for developing frontend web applications using a React-specific syntax. 
                        React applications are written as a set of components which return particular elements without directly altering the underlying HTML. 
                        Crucially, this enables the development of a Single Page Application (SPA). SPAs load HTML, JavaScript, and CSS files only once, 
                        then given the appearance of navigating to different pages by displaying different elements of those files according to the React code.
                        </dd>
                    <dt><strong>MERN</strong></dt>
                    <dd>MongoDB, Express, React, and Node are collectively referred to as MERN and commonly employed together in the development of web applications.</dd>
                </dl>
            </article>

        </>
    );
}
export default HomePage;
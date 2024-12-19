function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Facivons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>A designated home page is the file to which a web server defaults when a website URL does not specify a particular path to a specific resource. For most web servers, including the Oregon State University server on which my web page is hosted, the default path is "\index.html". 
                    Therefore, when my web page's address is entered without a defined path, the web server will return the <strong>index</strong>.html file stored in the root directory.</p>
                <p>The Chrome-Developer Tools-Network tab output screen displays <strong>General</strong> information about the request, along with further information under <strong>Response</strong> Headers and <strong>Request</strong> Headers. 
                    General information is similar when the file is viewed on the web and on the local computer: Request URL, Request Method, Status Code, and Referrer Policy details are all present. 
                    Viewing the file on the web adds Remote Address information, along with far more extensive Response Header and Request Header information detailing the communication between client and server.</p>
                <p>The web client makes GET requests for, among other parameters, favicons (ICO files), Cascading Style Sheets (CSS files), and JavaScript (JS files). 
                    For my web page, the favicon is automatically provided by the Oregon State University server on which it is hosted. The web client's GET request is thus fulfilled, and it responds with code 200: <strong>OK</strong>. 
                    However, my web page currently lacks both a main.css file and a main.js file. The GET request for those files therefore failed, and the web client responded with code 404: <strong>Not Found</strong>.</p>
                <p>The <strong>scheme</strong> of my web page's URL is "https:", identifying the protocol for the web client to use when requesting the page. The <strong>subdomain</strong> is "web.engr.", indicating a particular section of the server.
                    The host <strong>domain</strong> and extension are "oregonstate.edu", identifying the server on which the page is hosted. The <strong>path</strong> to resources is "/~bubieri/a1-bubieri/", identifying the specific resource on the server.</p>
            </article>
            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is the process of creating the best possible experience for users of a web application. This includes both the visual design, the graphical user interface, and the <strong>usability</strong> of a website. 
                    Visual design includes color scheme, font, typography, and all other elements defining the appearance of the website. Usability is the users' experience when using the website for some particular task.
                </p>
                <h4>The Five "E"s of Usability</h4>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Users are able to achieve the desired results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Users are able to complete tasks quickly and easily.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>Users are able to find things quickly and intuitively.</dd>
                    <dt><strong>Error-Free</strong></dt>
                    <dd>Users do not encounter accessibility or availability issues.</dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>Users have an overall positive experience.</dd>
                </dl>
                <p>Web pages typically include common <strong>Page Layout Tags</strong> which break content into blocks and which may be further customized using CSS.  The <strong>header</strong> element denotes the banner for a web application and usually includes the name, publisher, and slogan. 
                    <strong>nav</strong> elements denote a group of anchor elements and are used for menus, searches, and anything else that moves the user from where they are to somewhere else. The <strong>main</strong> element contains the primary content for the website, 
                    sometimes organized into sections and articles. <strong>Section</strong> elements are used to group related content, often a selection of articles. <strong>Article</strong> elements cover a particular topic, with related articles often being grouped into sections. 
                    The <strong>footer</strong> element follows the main element and typically carries copyright, contact, legal, and other types of important information.</p>
                <h4>Anchor Element Links</h4>
                <ol>
                    <li><strong>External Content</strong> is linked via an anchor element with a full URL, known as an <strong>absolute URL</strong>, in the HREF attribute. The anchor also includes a description of the link.</li>
                    <li><strong>Internal Content</strong> is linked via an anchor element with a hashtag and an <strong>ID</strong> in the HREF attribute. The ID is defined as an attribute elsewhere on the same page. The anchor also includes a description of the link.</li>
                    <li><strong>Page-to-Page</strong> is linked via an anchor element with a truncated URL, known as a <strong>relative URL</strong>, in the HREF attribute. The anchor also includes a description of the link.</li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>The six major specifications for images on the web are <strong>descriptive file names, small file sizes, exact dimensions, correct file formats, reduced resolutions, and color modes</strong>. Descriptive file names help search engines categorize images for users searching for related images. 
                    Small file sizes enable the fastest possible load time for images, though excessive file compression can reduce image quality. Exact dimensions are also important for load times, as it is difficult to load an image into an insufficiently large space. 
                    Correct file formats ensure images are displayed correctly, as different image file formats are only suitable for certain types of images. Reduced resolutions allow images to be displayed on older monitors, many of which can only render a number of pixels far lower than an image's native resolution.
                    Color modes allow for a consistent visual style for a website, thus avoiding amateurish-looking web design that does not appeal to users.</p>
                <p>For photographs, <strong>JPG</strong> files are the most appropriate format. Photographic images contain an immense amount of detail, which makes them too large for the internet. JPG files are able to compress photos to a usable size without a drastic loss of image quality. 
                    <strong>PNG</strong> files can also be used, though the image tends to become noticeably pixelated as a result. For static line-art, <strong>PNG</strong> files are the most appropriate format. PNG files have true transparency and so can be placed over a variety of colors and backgrounds. 
                    For line-art graphics, <strong>GIF</strong> files are the most appropriate format. GIF files have lesser transparency than PNG files, but their edges anti-alias to a single background matte color.</p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are symbols used by browsers and devices to visually identify and, in some cases, launch websites and applications. They can be saved in .ICO, .PNG, .SVG, and .GIF formats, with the former three being the most popular and the first being the original format. 
                    The same image is typically used for a particular favicon, but saved in multiple different resolutions to be viewable on a variety of different browsers and devices.</p>
            </article>
            <article id="css">
                <h3>CSS</h3>
                <p><strong>Cascading Style Sheets</strong> (CSS) should be included in websites and applications to improve usability, readability, legibility, and branding. While HTML alone is capable of organizing information for display in web browsers, it does so in a distinctly sparse style.
                    This lack of visual appeal and direction can severely hamper users' enjoyment and effective use of web content. CSS files offer developers the opportunity to customize the visual design of their web pages to a fine degree, vastly improving the overall user experience.</p>
                <p>Styles may be incorporated through rules which are <strong>external linked, external imported, embedded, inline, or regular JavaScript</strong>. Linking or importing from an external CSS file is usually the most efficient method of adding style to an app or website, and so is typically the preferred method.
                    Embedded, inline, and regular JavaScript style implementation is possible, but is typically reserved for one-off changes when creating or altering a CSS file would be inefficient.</p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>The six major goals of accessible forms are to: <strong>Provide clear instructions</strong> for both the form as a whole and all specific fields. Inform users on <strong>what data is required</strong> and <strong>why data is being collected</strong>.
                    <strong>Set the first field to autofocus</strong> and <strong>ensure all fields can be filled using the keyboard</strong>, to enable users who cannot use a mouse. Clearly indicate the order to fill forms by including <strong>tab indexing when forms are complex</strong>.
                    <strong>Ensure validation messages are screen readable</strong>, as built-in HTML messages are not compatible with screen readers.</p>
                <p>The <strong>form</strong> tag is required to add a form to a document. The most important attributes for the form tag are <strong>action</strong>, which specifies where a form is sent, and <strong>method</strong>, which specifies the method used in the HTTP request.
                    The <strong>input</strong> tag is the most common data-input tag. The most important attributes for the input tag are <strong>type</strong>, which customizes its appearance and behavior, and <strong>name</strong>, which determines how data is interpreted. 
                    Another common data-input tag is <strong>select</strong> with associated <strong>options</strong>. The select tag creates a drop-down list of choices provided by options tags. A third data-input tag, <strong>textarea</strong>, allows users to input lines of text.
                    As with the input tag, the name attribute is crucial for select and textarea tags. Finally, the <strong>button</strong> tag gives users control over the <strong>action</strong> attribute associated with the button.</p>
                <p>Forms are often filled via phones and other small touch screens, so <strong>size and placement of labels and form controls</strong> is important to assist less dexterous users. <strong>Size and placement of labels and controls</strong> are crucial to help users understand what fields are required.
                    To assist users who are unfamiliar with a particular form, <strong>standard design expectations</strong> such as patterns and placeholder text should be included.</p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p><strong>Node</strong>, or Node.js, is a server-side environment written in JavaScript. Node allows the use of many preexisting open-source software packages that save programmers the trouble of writing entire programs from scratch.
                    <strong>NPM</strong> (Node Packet Manager) refers to both an online repository of published Node packages and the command-line utility which installs and manages the packages within the context of particular projects.
                    <strong>Express</strong>, or Express.js, is a web development framework which provides an Application Programming Interface (API), allowing developers to get, post, delete, and manipulate data in a wide variety of useful ways.</p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>The main data types in JavaScript are <strong>number, Boolean, string, symbol, object, undefined, and null</strong>. <strong>Objects</strong> are sets of name-value pairs, and form the basis of object-oriented programming languages such as JavaScript.
                    Names in these pairs are referred to as 'properties', which may be created, read, updated, and deleted. <strong>Arrays</strong> are objects with the property names '1', '2', '3', etc. as strings. Arrays offer a variety of useful data access and management options for programmers.
                    <strong>JSON</strong> stands for JavaScript Object Notation, the format for exchanging data between applications. Though its name includes 'JavaScript', modern JSON is actually programming language independent and allows for data exchange between different-language programs.
                    <strong>Conditionals</strong> are statements used for branching program behavior based on certain conditions. JavaScript enables branching through 'if' and 'switch' statements. <strong>Loops</strong> are statements used for repeating program behavior based on certain conditions.
                    JavaScript enables looping through a variety of 'while' and 'if' statements. <strong>Object-oriented programming</strong> is programming centered around portions of code with distinct and defined identity, state, and behavior.
                    <strong>Functional programming</strong> is the programming of different behaviors based on the particular function called and arguments passed to that function.</p>
            </article>
        </>
    );
}
export default TopicsPage;
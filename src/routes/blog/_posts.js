// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
{
	title: 'Raspberry Pi',
	slug: 'raspberry-pi',
	html: `<p>I've found myself more and more interested in purchasing a Raspberry Pi.</p>
	<p>I saw a <a href="https://news.ycombinator.com/item?id=20264911">thread on Hacker News</a> that asked the users what they did with their Raspberry Pi.</p>
	<p>There are a variety of uses detailed in the thread from providing information to triggering certain events for real life actions. The opportunities seem endless.</p>
	<p>I'll be doing more research on this great tech and determining where it would be practical in my life.</p>`
},
{
	title: 'CSS Grid: A concept not yet understood',
	slug: 'css-grid-a-concept-not-yet-understood',
	html: `<p>The CSS grid is a magnificent creation. It makes creating a website swift versus the traditional way. It shares a similar backbone to Bootstrap where you have a finite amount of spaces to fill.
	<p>On the plus side it essentially removes all the crazy calculations you have to do with margins and padding. You can delegate an entire row to one thing or split something into several groups in rows, columns or both!</p>
	<p>The thing is, the concept is easy but it gets very confusing when you have alternative ways to do things for practically everything.</p>
	<p>You can read articles online from dawn to dusk and still scratch your head on the many methods of doing one thing. </p>
	<p>If there is one thing I learned reading online, it is that I still don't fully grasp CSS grid. It is so simple yet so complicated.</p>
	<p>I'll keep reading articles and making up mock grids to fully grasp the true power of the grid.</p>`
},
{
	title: 'A cool interactive resume',
	slug: 'a-cool-interactive-resume',
	html: `<p>I was looking through some of my favorites and I stumbled on this interactive resume I had saved for inspiration and thought I would share it.</p>
	<p><a href="http://www.rleonardi.com/interactive-resume">Here</a> is the link to the web page.</p>`
},
{
	title: 'Diving into something new: Ethical hacking: Part 2',
	slug: 'diving-into-something-new-ethical-hacking-part-two',
	html: `<p>I've been watching a <a href="https://www.youtube.com/watch?v=3Kq1MIfTWCE">penetration testing beginner course</a> (~15 hours long) and it has been very educational so far. I'm 6 hours into the video. There is so much material in this video that it would be impossible to go through it all in one sitting without it numbing your brain.</p>
	<p>As the video proceeds, I find myself questioning myself what I expected from this video. Here I thought it was all tools and programs to download and it would do 99% of the work. This is where I couldn't be more wrong.<p>
	<p>Penetration testing is not just tools, it is using your problem solving skills and thinking outside of the box. Many times tools can fail to find information so you have to think about what you are trying to achieve and what tools you have at your disposal to achieve your goal.</p>`
},
{
	title: 'Diving into something new: Ethical hacking: Part 1',
	slug: 'diving-into-something-new-ethical-hacking-part-one',
	html: `<p>I've been watching a <a href="https://www.youtube.com/watch?v=3Kq1MIfTWCE">penetration testing beginner course</a> (~15 hours long) and it has been very educational so far.</p>
	<p>I'm 2 hours into the video.</p>
	<p>The topics covered are installing Linux for ethical hackers (Kali Linux), an intro to Python, several tools and lessons for ethical hacking and command line commands among other topics.</p>
	<p>This is by far my favorite subject in everything I've spent time studying and practicing. It has always been a passion of mine to be a penetration tester.</p>
	<p>It's fascinating to me when I think about how someone developed their network topology, website, database, etc... even the physical security.</p>`
},
{
	title: 'Remembering Python',
	slug: 'remembering-python',
	html: `<p>Python: the language that we all praise as the best beginner friendly language.</p>
	<p>Python was my favorite programming language when I took coding more seriously. It was one of the first all-purpose language I actually learned other than the standard HTML/CSS combo.</p>
	<p>Once I started to branch off into building my portfolio website, I put Python on the back burner while I focused on HTML, CSS, & JS. At the time I didn't feel that Python was necessary for the purpose of my project.</p>
	<p>I also took on frameworks like Rails and Angular among technologies like Node.js.</p>
	<p>I was steering towards being a jack of all trades but then I wasn't interested in knowing a little of everything. I really want to be a pro at one thing and then develop from there.</p>
	<p>Having gone through a Python tutorial again, I forgot how humanlike the code was and it almost speaks the same language as a human.</p>
	<p>This is what makes Python appealing. Anyone with a basic understanding of code can understand Python versus many of the other languages that are out there.</p>
	<p>I'm considering to get back into Python to hone my skills. Python has great potential and I would like to get into more automation like web crawling.</p>`
},
];
	posts.forEach(post => {
		post.html = post.html.replace(/^\t{3}/gm, '');
	});

export default posts;
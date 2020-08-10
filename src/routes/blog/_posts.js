// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
{
	title: 'CSS Grid: A concept not yet understood',
	slug: 'css-grid-a-concept-not-yet-understood',
	html: `<p>The CSS grid is a magnificent creation. It makes creating a website swift versus the traditional way. It shares the a similar backbone to Bootstrap in which you have a finite amount of spaces to fill, but on the plus side it essentially removes all the crazy calculations you have to do with margins and padding. You can delegate an entire row to one thing or split something into several groups in rows, columns or both! The thing is, the concept is easy but it gets very confusing when you have alternatives to practically everything. You can read articles online from dawn to dusk and still scratch your head on the many methods of doing one thing. If there is one thing I learned reading these articles, it is that I still don't fully grasp CSS grid. It is so simple yet so complicated. I'll keep reading articles and making up mock grids to fully grasp the true power of the grid.</p>`
},
{
	title: 'A cool interactive resume',
	slug: 'a-cool-interactive-resume',
	html: `<p>I was looking through some of my favorites and I stumbled on this interactive resume I had saved for inspiration and thought I would share it. <a href="http://www.rleonardi.com/interactive-resume">Here</a> is the link to the web page.</p>`
},
{
	title: 'Penetration Testing',
	slug: 'penetration-testing',
	html: `<p>I've been watching a <a href="https://www.youtube.com/watch?v=3Kq1MIfTWCE">penetration testing beginner course</a> (~15 hours long) and it has been very educational so far. I'm 6 hours into the video. There is so much material in this video that it would be impossible to go through it all in one sitting without it numbing your brain. In essence, information overload. As the video proceeds, I find myself questioning myself what I expected from this video. Here I thought it was all tools and programs to download and it would do 99% of the work. This is where I was more wrong. Penetration testing is not only tools, it is also using your problem solving skills and thinking out of the box. Many times tools fail to find information so you have to think about what you are trying to achieve and what tools do you have at your disposal to achieve that whether it be a tool or what you know from experience.</p>`
},
{
	title: 'Diving into something new: Ethical hacking',
	slug: 'diving-into-something-new-ethical-hacking',
	html: `<p>I've been watching a <a href="https://www.youtube.com/watch?v=3Kq1MIfTWCE">penetration testing beginner course</a> (~15 hours long) and it has been very educational so far. I'm 2 hours into the video. The topics covered are installing Linux for ethical hackers (Kali Linux), an intro to Python, several tools and lessons for ethical hacking and command line commands among other topics. This is by far my favorite subject in everything I've spent time studying and practicing. It has always been a passion of mine being a penetration tester. It's fascinating how someone developed their network topology, website, database, etc... even the physical security.</p>`
},
{
	title: 'Remembering Python',
	slug: 'remembering-python',
	html: `<p>Python: the language that we all praise as the best beginner friendly language. Python was my favorite programming language last year. It was one of the first languages I actually learned.  I started to branch off into building websites so I put Python on the back burner while I focused on HTML, CSS, & JS. I also took on frameworks like Rails and Angular among technologies like Node.js. I was steering towards being a jack of all trades but I wasn't interested in knowing a little of everything. I really want to be a pro at one thing and then develop from there. Having gone through the Python tutorial again, I forgot how humanlike the code was and it almost speaks to the user so that basically anyone with a basic understanding of code can understand versus many of the other languages that are out there. I'm considering to get back into Python to hone my skills. Python has great potential and I would like to get into more automation.</p>`
},
];
	posts.forEach(post => {
		post.html = post.html.replace(/^\t{3}/gm, '');
	});

export default posts;
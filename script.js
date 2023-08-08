function pageOneAnimation() {
	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#home",
			start: "top top",
			scrub: 1,
			pin: true,
			// markers: true,
		},
	});

	tl.to(
		"#circle #btm img",
		{
			rotate: "-180deg",
			scale: 0.6,
			stagger: 0.1,
			ease: Power1,
		},
		"same"
	)
		.to(
			"#circle #top img",
			{
				scale: 0.6,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#cimg img",
			{
				scale: 0,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#centerimg h5",
			{
				opacity: 0,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#circo",
			{
				top: "50%",
				scale: 2,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#circle",
			{
				scale: 0.5,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#smcircle",
			{
				scale: 0.6,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#overlay h1",
			{
				bottom: "-50%",
				rotate: 0,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#tan h1",
			{
				bottom: "0%",
				rotate: 0,
				ease: Power1,
			},
			"same"
		)
		.to(
			"#circle",
			{
				scale: 0,
				ease: Power1,
			},
			"same2"
		)
		.to(
			"#smcircle",
			{
				scale: 0,
				ease: Power1,
			},
			"same2"
		)
		.to(
			"#circo",
			{
				opacity: 0,
				scale: 0.1,
				ease: Power1,
			},
			"same2"
		)
		.to(
			"#sideorange",
			{
				top: 0,
				duration: 2,
				ease: Power1,
			},
			"same2"
		)
		.to("#sideorange", {
			top: "-150%",
			delay: 0.1,
			duration: 2,
			ease: Power1,
		});
}

function pageTwoAnimation() {
	var tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: "#second",
			pin: true,
			// markers: true,
			scrub: 1,
			start: "top top",
		},
	});

	tl2
		.to(".circle", {
			top: "50%",
			stagger: 0.5,
			duration: 1,
			ease: Power1,
		})
		.to(".circle", {
			left: "50%",
			duration: 1,
			ease: Power1,
		})
		.to(".circle", {
			scale: 10,
			duration: 5,
			ease: Power1,
		})
		.to(
			".pi",
			{
				background: `linear-gradient(to right, #F8955B, #58356E)`,
				duration: 5,
				ease: Power1,
			},
			"a"
		)
		.to(
			"#sectop h1",
			{
				left: "-100%",
				duration: 10,
				ease: Power1,
			},
			"a"
		)
		.to(
			"#one",
			{
				opacity: 0,
				ease: Power1,
			},
			"a"
		)
		.to(
			"#two",
			{
				opacity: 1,
				duration: 2,
				ease: Power1,
			},
			"a"
		)
		.to(
			"#p2",
			{
				opacity: 0,
				duration: 3,
				ease: Power1,
			},
			"a"
		)
		.to(
			"#p1",
			{
				opacity: 1,
				delay: 2,
				duration: 3,
				ease: Power1,
			},
			"a"
		);
	tl2.to(
		"#cshade1",
		{
			top: 0,
			delay: 0.2,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#cshade2",
		{
			top: 0,
			delay: 0.4,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#cshade3",
		{
			top: 0,
			delay: 0.7,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#cshade4",
		{
			top: 0,
			delay: 1.1,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#cshade5",
		{
			top: 0,
			delay: 1.2,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#two",
		{
			opacity: 0,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#three",
		{
			opacity: 1,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#colorslide",
		{
			opacity: 1,
			delay: 1.1,
			ease: Power1,
		},
		"b"
	);
	tl2.to(
		"#slide1",
		{
			right: "-5%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide2",
		{
			right: "15%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide3",
		{
			right: "35%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide4",
		{
			right: "55%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide5",
		{
			right: "75%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide6",
		{
			right: "-13%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide7",
		{
			right: "7%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide8",
		{
			right: "28%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide9",
		{
			right: "47%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
	tl2.to(
		"#slide10",
		{
			right: "68%",
			delay: 8,
			duration: 7,
			ease: Power1,
		},
		"c"
	);
}
function pageFourAnimation() {
	var tl4 = gsap.timeline({
		scrollTrigger: {
			trigger: "#fourth",
			start: "top top",
			scrub: 1,
			pin: true,
			// markers: true,
		},
	});
	tl4.to(
		"#midcircle",
		{
			rotate: "720deg",
		},
		"end"
	);
	// tl4.to(
	// 	"#oct_left",
	// 	{
	// 		background: `#275336`,
	// 	},
	// 	"end"
	// );
}
function pageFiveAnimation() {
	var tl5 = gsap.timeline({
		scrollTrigger: {
			trigger: "#fifth",
			start: "top top",
			scrub: 1,
			pin: true,
			// markers: true,
		},
	});
	tl5.to(
		"#scroll_color",
		{
			left: "-50vw",
			ease: Power1,
		},
		"same5"
	);
	tl5.to(
		"#lineAnim",
		{
			right: "-100%",
			duration: 10,
			ease: Power1,
		},
		"same5"
	);
}
function pageSixAnimation() {
	var tl6 = gsap.timeline({
		scrollTrigger: {
			trigger: "#sixth",
			start: "85% 85%",
			scrub: 1,
			pin: true,
			// markers: true,
		},
	});
	tl6.to(
		"#imgTwo h1",
		{
			left: "-50%",
			// delay: 20,
			duration: 10,
			ease: Power1,
		},
		"same6"
	);
}
pageOneAnimation();
pageTwoAnimation();
pageFourAnimation();
pageFiveAnimation();
pageSixAnimation();

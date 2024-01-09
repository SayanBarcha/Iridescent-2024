gsap.config({ trialWarn: false });
let select = (s) => document.querySelector(s),
	toArray = (s) => gsap.utils.toArray(s),
	xmlns = "http://www.w3.org/2000/svg",
	mainSVG = select("#mainSVG"),
	container = select("#container"),
	lineContainer = select("#lineContainer"),
	pointArray = [
		{
			x: 239.03,
			y: 214.76
		},
		{
			x: 451.45,
			y: 214.76
		},
		{
			x: 330.48,
			y: 217.23
		},
		{
			x: 338.48,
			y: 217.23
		},
		{
			x: 346.48,
			y: 217.23
		},
		{
			x: 354.48,
			y: 217.23
		},
		{
			x: 362.48,
			y: 217.23
		},
		{
			x: 215.03,
			y: 222.76
		},
		{
			x: 223.03,
			y: 222.76
		},
		{
			x: 231.03,
			y: 222.76
		},
		{
			x: 239.03,
			y: 222.76
		},
		{
			x: 247.03,
			y: 222.76
		},
		{
			x: 255.03,
			y: 222.76
		},
		{
			x: 263.03,
			y: 222.76
		},
		{
			x: 427.45,
			y: 222.76
		},
		{
			x: 435.45,
			y: 222.76
		},
		{
			x: 443.45,
			y: 222.76
		},
		{
			x: 451.45,
			y: 222.76
		},
		{
			x: 459.45,
			y: 222.76
		},
		{
			x: 467.45,
			y: 222.76
		},
		{
			x: 475.45,
			y: 222.76
		},
		{
			x: 560.97,
			y: 222.76
		},
		{
			x: 568.97,
			y: 222.76
		},
		{
			x: 576.97,
			y: 222.76
		},
		{
			x: 584.97,
			y: 222.76
		},
		{
			x: 322.48,
			y: 225.23
		},
		{
			x: 330.48,
			y: 225.23
		},
		{
			x: 338.48,
			y: 225.23
		},
		{
			x: 346.48,
			y: 225.23
		},
		{
			x: 354.48,
			y: 225.23
		},
		{
			x: 362.48,
			y: 225.23
		},
		{
			x: 370.48,
			y: 225.23
		},
		{
			x: 207.03,
			y: 230.76
		},
		{
			x: 215.03,
			y: 230.76
		},
		{
			x: 223.03,
			y: 230.76
		},
		{
			x: 231.03,
			y: 230.76
		},
		{
			x: 239.03,
			y: 230.76
		},
		{
			x: 247.03,
			y: 230.76
		},
		{
			x: 255.03,
			y: 230.76
		},
		{
			x: 263.03,
			y: 230.76
		},
		{
			x: 271.03,
			y: 230.76
		},
		{
			x: 419.45,
			y: 230.76
		},
		{
			x: 427.45,
			y: 230.76
		},
		{
			x: 435.45,
			y: 230.76
		},
		{
			x: 443.45,
			y: 230.76
		},
		{
			x: 451.45,
			y: 230.76
		},
		{
			x: 459.45,
			y: 230.76
		},
		{
			x: 467.45,
			y: 230.76
		},
		{
			x: 475.45,
			y: 230.76
		},
		{
			x: 483.45,
			y: 230.76
		},
		{
			x: 552.97,
			y: 230.76
		},
		{
			x: 560.97,
			y: 230.76
		},
		{
			x: 568.97,
			y: 230.76
		},
		{
			x: 576.97,
			y: 230.76
		},
		{
			x: 584.97,
			y: 230.76
		},
		{
			x: 314.48,
			y: 233.23
		},
		{
			x: 322.48,
			y: 233.23
		},
		{
			x: 330.48,
			y: 233.23
		},
		{
			x: 338.48,
			y: 233.23
		},
		{
			x: 346.48,
			y: 233.23
		},
		{
			x: 354.48,
			y: 233.23
		},
		{
			x: 362.48,
			y: 233.23
		},
		{
			x: 370.48,
			y: 233.23
		},
		{
			x: 378.48,
			y: 233.23
		},
		{
			x: 207.03,
			y: 238.76
		},
		{
			x: 215.03,
			y: 238.76
		},
		{
			x: 223.03,
			y: 238.76
		},
		{
			x: 231.03,
			y: 238.76
		},
		{
			x: 239.03,
			y: 238.76
		},
		{
			x: 247.03,
			y: 238.76
		},
		{
			x: 255.03,
			y: 238.76
		},
		{
			x: 263.03,
			y: 238.76
		},
		{
			x: 271.03,
			y: 238.76
		},
		{
			x: 279.03,
			y: 238.76
		},
		{
			x: 419.45,
			y: 238.76
		},
		{
			x: 427.45,
			y: 238.76
		},
		{
			x: 435.45,
			y: 238.76
		},
		{
			x: 443.45,
			y: 238.76
		},
		{
			x: 451.45,
			y: 238.76
		},
		{
			x: 459.45,
			y: 238.76
		},
		{
			x: 467.45,
			y: 238.76
		},
		{
			x: 475.45,
			y: 238.76
		},
		{
			x: 483.45,
			y: 238.76
		},
		{
			x: 491.45,
			y: 238.76
		},
		{
			x: 552.97,
			y: 238.76
		},
		{
			x: 560.97,
			y: 238.76
		},
		{
			x: 568.97,
			y: 238.76
		},
		{
			x: 576.97,
			y: 238.76
		},
		{
			x: 584.97,
			y: 238.76
		},
		{
			x: 306.48,
			y: 241.23
		},
		{
			x: 314.48,
			y: 241.23
		},
		{
			x: 322.48,
			y: 241.23
		},
		{
			x: 330.48,
			y: 241.23
		},
		{
			x: 338.48,
			y: 241.23
		},
		{
			x: 346.48,
			y: 241.23
		},
		{
			x: 354.48,
			y: 241.23
		},
		{
			x: 362.48,
			y: 241.23
		},
		{
			x: 370.48,
			y: 241.23
		},
		{
			x: 378.48,
			y: 241.23
		},
		{
			x: 386.48,
			y: 241.23
		},
		{
			x: 199.03,
			y: 246.76
		},
		{
			x: 207.03,
			y: 246.76
		},
		{
			x: 215.03,
			y: 246.76
		},
		{
			x: 223.03,
			y: 246.76
		},
		{
			x: 231.03,
			y: 246.76
		},
		{
			x: 255.03,
			y: 246.76
		},
		{
			x: 263.03,
			y: 246.76
		},
		{
			x: 271.03,
			y: 246.76
		},
		{
			x: 279.03,
			y: 246.76
		},
		{
			x: 411.45,
			y: 246.76
		},
		{
			x: 419.45,
			y: 246.76
		},
		{
			x: 427.45,
			y: 246.76
		},
		{
			x: 435.45,
			y: 246.76
		},
		{
			x: 443.45,
			y: 246.76
		},
		{
			x: 467.45,
			y: 246.76
		},
		{
			x: 475.45,
			y: 246.76
		},
		{
			x: 483.45,
			y: 246.76
		},
		{
			x: 491.45,
			y: 246.76
		},
		{
			x: 544.97,
			y: 246.76
		},
		{
			x: 552.97,
			y: 246.76
		},
		{
			x: 560.97,
			y: 246.76
		},
		{
			x: 568.97,
			y: 246.76
		},
		{
			x: 576.97,
			y: 246.76
		},
		{
			x: 584.97,
			y: 246.76
		},
		{
			x: 306.48,
			y: 249.24
		},
		{
			x: 314.48,
			y: 249.24
		},
		{
			x: 322.48,
			y: 249.24
		},
		{
			x: 330.48,
			y: 249.24
		},
		{
			x: 362.48,
			y: 249.24
		},
		{
			x: 370.48,
			y: 249.24
		},
		{
			x: 378.48,
			y: 249.24
		},
		{
			x: 386.48,
			y: 249.24
		},
		{
			x: 199.03,
			y: 254.76
		},
		{
			x: 207.03,
			y: 254.76
		},
		{
			x: 215.03,
			y: 254.76
		},
		{
			x: 223.03,
			y: 254.76
		},
		{
			x: 255.03,
			y: 254.76
		},
		{
			x: 263.03,
			y: 254.76
		},
		{
			x: 271.03,
			y: 254.76
		},
		{
			x: 279.03,
			y: 254.76
		},
		{
			x: 411.45,
			y: 254.76
		},
		{
			x: 419.45,
			y: 254.76
		},
		{
			x: 427.45,
			y: 254.76
		},
		{
			x: 435.45,
			y: 254.76
		},
		{
			x: 467.45,
			y: 254.76
		},
		{
			x: 475.45,
			y: 254.76
		},
		{
			x: 483.45,
			y: 254.76
		},
		{
			x: 491.45,
			y: 254.76
		},
		{
			x: 544.97,
			y: 254.76
		},
		{
			x: 552.97,
			y: 254.76
		},
		{
			x: 560.97,
			y: 254.76
		},
		{
			x: 568.97,
			y: 254.76
		},
		{
			x: 576.97,
			y: 254.76
		},
		{
			x: 584.97,
			y: 254.76
		},
		{
			x: 306.48,
			y: 257.24
		},
		{
			x: 314.48,
			y: 257.24
		},
		{
			x: 322.48,
			y: 257.24
		},
		{
			x: 330.48,
			y: 257.24
		},
		{
			x: 362.48,
			y: 257.24
		},
		{
			x: 370.48,
			y: 257.24
		},
		{
			x: 378.48,
			y: 257.24
		},
		{
			x: 386.48,
			y: 257.24
		},
		{
			x: 199.03,
			y: 262.76
		},
		{
			x: 207.03,
			y: 262.76
		},
		{
			x: 215.03,
			y: 262.76
		},
		{
			x: 223.03,
			y: 262.76
		},
		{
			x: 255.03,
			y: 262.76
		},
		{
			x: 263.03,
			y: 262.76
		},
		{
			x: 271.03,
			y: 262.76
		},
		{
			x: 279.03,
			y: 262.76
		},
		{
			x: 411.45,
			y: 262.76
		},
		{
			x: 419.45,
			y: 262.76
		},
		{
			x: 427.45,
			y: 262.76
		},
		{
			x: 435.45,
			y: 262.76
		},
		{
			x: 467.45,
			y: 262.76
		},
		{
			x: 475.45,
			y: 262.76
		},
		{
			x: 483.45,
			y: 262.76
		},
		{
			x: 491.45,
			y: 262.76
		},
		{
			x: 536.97,
			y: 262.76
		},
		{
			x: 544.97,
			y: 262.76
		},
		{
			x: 552.97,
			y: 262.76
		},
		{
			x: 560.97,
			y: 262.76
		},
		{
			x: 568.97,
			y: 262.76
		},
		{
			x: 576.97,
			y: 262.76
		},
		{
			x: 584.97,
			y: 262.76
		},
		{
			x: 306.48,
			y: 265.24
		},
		{
			x: 314.48,
			y: 265.24
		},
		{
			x: 322.48,
			y: 265.24
		},
		{
			x: 330.48,
			y: 265.24
		},
		{
			x: 362.48,
			y: 265.24
		},
		{
			x: 370.48,
			y: 265.24
		},
		{
			x: 378.48,
			y: 265.24
		},
		{
			x: 386.48,
			y: 265.24
		},
		{
			x: 255.03,
			y: 270.76
		},
		{
			x: 263.03,
			y: 270.76
		},
		{
			x: 271.03,
			y: 270.76
		},
		{
			x: 279.03,
			y: 270.76
		},
		{
			x: 467.45,
			y: 270.76
		},
		{
			x: 475.45,
			y: 270.76
		},
		{
			x: 483.45,
			y: 270.76
		},
		{
			x: 491.45,
			y: 270.76
		},
		{
			x: 536.97,
			y: 270.76
		},
		{
			x: 544.97,
			y: 270.76
		},
		{
			x: 552.97,
			y: 270.76
		},
		{
			x: 560.97,
			y: 270.76
		},
		{
			x: 568.97,
			y: 270.76
		},
		{
			x: 576.97,
			y: 270.76
		},
		{
			x: 584.97,
			y: 270.76
		},
		{
			x: 306.48,
			y: 273.24
		},
		{
			x: 314.48,
			y: 273.24
		},
		{
			x: 322.48,
			y: 273.24
		},
		{
			x: 330.48,
			y: 273.24
		},
		{
			x: 362.48,
			y: 273.24
		},
		{
			x: 370.48,
			y: 273.24
		},
		{
			x: 378.48,
			y: 273.24
		},
		{
			x: 386.48,
			y: 273.24
		},
		{
			x: 255.03,
			y: 278.76
		},
		{
			x: 263.03,
			y: 278.76
		},
		{
			x: 271.03,
			y: 278.76
		},
		{
			x: 279.03,
			y: 278.76
		},
		{
			x: 467.45,
			y: 278.76
		},
		{
			x: 475.45,
			y: 278.76
		},
		{
			x: 483.45,
			y: 278.76
		},
		{
			x: 491.45,
			y: 278.76
		},
		{
			x: 528.97,
			y: 278.76
		},
		{
			x: 536.97,
			y: 278.76
		},
		{
			x: 544.97,
			y: 278.76
		},
		{
			x: 560.97,
			y: 278.76
		},
		{
			x: 568.97,
			y: 278.76
		},
		{
			x: 576.97,
			y: 278.76
		},
		{
			x: 584.97,
			y: 278.76
		},
		{
			x: 306.48,
			y: 281.24
		},
		{
			x: 314.48,
			y: 281.24
		},
		{
			x: 322.48,
			y: 281.24
		},
		{
			x: 330.48,
			y: 281.24
		},
		{
			x: 362.48,
			y: 281.24
		},
		{
			x: 370.48,
			y: 281.24
		},
		{
			x: 378.48,
			y: 281.24
		},
		{
			x: 386.48,
			y: 281.24
		},
		{
			x: 247.03,
			y: 286.76
		},
		{
			x: 255.03,
			y: 286.76
		},
		{
			x: 263.03,
			y: 286.76
		},
		{
			x: 271.03,
			y: 286.76
		},
		{
			x: 279.03,
			y: 286.76
		},
		{
			x: 459.45,
			y: 286.76
		},
		{
			x: 467.45,
			y: 286.76
		},
		{
			x: 475.45,
			y: 286.76
		},
		{
			x: 483.45,
			y: 286.76
		},
		{
			x: 491.45,
			y: 286.76
		},
		{
			x: 528.97,
			y: 286.76
		},
		{
			x: 536.97,
			y: 286.76
		},
		{
			x: 544.97,
			y: 286.76
		},
		{
			x: 560.97,
			y: 286.76
		},
		{
			x: 568.97,
			y: 286.76
		},
		{
			x: 576.97,
			y: 286.76
		},
		{
			x: 584.97,
			y: 286.76
		},
		{
			x: 306.48,
			y: 289.24
		},
		{
			x: 314.48,
			y: 289.24
		},
		{
			x: 322.48,
			y: 289.24
		},
		{
			x: 330.48,
			y: 289.24
		},
		{
			x: 362.48,
			y: 289.24
		},
		{
			x: 370.48,
			y: 289.24
		},
		{
			x: 378.48,
			y: 289.24
		},
		{
			x: 386.48,
			y: 289.24
		},
		{
			x: 247.03,
			y: 294.76
		},
		{
			x: 255.03,
			y: 294.76
		},
		{
			x: 263.03,
			y: 294.76
		},
		{
			x: 271.03,
			y: 294.76
		},
		{
			x: 459.45,
			y: 294.76
		},
		{
			x: 467.45,
			y: 294.76
		},
		{
			x: 475.45,
			y: 294.76
		},
		{
			x: 483.45,
			y: 294.76
		},
		{
			x: 520.97,
			y: 294.76
		},
		{
			x: 528.97,
			y: 294.76
		},
		{
			x: 536.97,
			y: 294.76
		},
		{
			x: 544.97,
			y: 294.76
		},
		{
			x: 560.97,
			y: 294.76
		},
		{
			x: 568.97,
			y: 294.76
		},
		{
			x: 576.97,
			y: 294.76
		},
		{
			x: 584.97,
			y: 294.76
		},
		{
			x: 306.48,
			y: 297.24
		},
		{
			x: 314.48,
			y: 297.24
		},
		{
			x: 322.48,
			y: 297.24
		},
		{
			x: 330.48,
			y: 297.24
		},
		{
			x: 362.48,
			y: 297.24
		},
		{
			x: 370.48,
			y: 297.24
		},
		{
			x: 378.48,
			y: 297.24
		},
		{
			x: 386.48,
			y: 297.24
		},
		{
			x: 239.03,
			y: 302.76
		},
		{
			x: 247.03,
			y: 302.76
		},
		{
			x: 255.03,
			y: 302.76
		},
		{
			x: 263.03,
			y: 302.76
		},
		{
			x: 271.03,
			y: 302.76
		},
		{
			x: 451.45,
			y: 302.76
		},
		{
			x: 459.45,
			y: 302.76
		},
		{
			x: 467.45,
			y: 302.76
		},
		{
			x: 475.45,
			y: 302.76
		},
		{
			x: 483.45,
			y: 302.76
		},
		{
			x: 520.97,
			y: 302.76
		},
		{
			x: 528.97,
			y: 302.76
		},
		{
			x: 536.97,
			y: 302.76
		},
		{
			x: 560.97,
			y: 302.76
		},
		{
			x: 568.97,
			y: 302.76
		},
		{
			x: 576.97,
			y: 302.76
		},
		{
			x: 584.97,
			y: 302.76
		},
		{
			x: 306.48,
			y: 305.24
		},
		{
			x: 314.48,
			y: 305.24
		},
		{
			x: 322.48,
			y: 305.24
		},
		{
			x: 330.48,
			y: 305.24
		},
		{
			x: 362.48,
			y: 305.24
		},
		{
			x: 370.48,
			y: 305.24
		},
		{
			x: 378.48,
			y: 305.24
		},
		{
			x: 386.48,
			y: 305.24
		},
		{
			x: 239.03,
			y: 310.76
		},
		{
			x: 247.03,
			y: 310.76
		},
		{
			x: 255.03,
			y: 310.76
		},
		{
			x: 263.03,
			y: 310.76
		},
		{
			x: 451.45,
			y: 310.76
		},
		{
			x: 459.45,
			y: 310.76
		},
		{
			x: 467.45,
			y: 310.76
		},
		{
			x: 475.45,
			y: 310.76
		},
		{
			x: 512.97,
			y: 310.76
		},
		{
			x: 520.97,
			y: 310.76
		},
		{
			x: 528.97,
			y: 310.76
		},
		{
			x: 536.97,
			y: 310.76
		},
		{
			x: 560.97,
			y: 310.76
		},
		{
			x: 568.97,
			y: 310.76
		},
		{
			x: 576.97,
			y: 310.76
		},
		{
			x: 584.97,
			y: 310.76
		},
		{
			x: 306.48,
			y: 313.24
		},
		{
			x: 314.48,
			y: 313.24
		},
		{
			x: 322.48,
			y: 313.24
		},
		{
			x: 330.48,
			y: 313.24
		},
		{
			x: 362.48,
			y: 313.24
		},
		{
			x: 370.48,
			y: 313.24
		},
		{
			x: 378.48,
			y: 313.24
		},
		{
			x: 386.48,
			y: 313.24
		},
		{
			x: 231.03,
			y: 318.76
		},
		{
			x: 239.03,
			y: 318.76
		},
		{
			x: 247.03,
			y: 318.76
		},
		{
			x: 255.03,
			y: 318.76
		},
		{
			x: 443.45,
			y: 318.76
		},
		{
			x: 451.45,
			y: 318.76
		},
		{
			x: 459.45,
			y: 318.76
		},
		{
			x: 467.45,
			y: 318.76
		},
		{
			x: 512.97,
			y: 318.76
		},
		{
			x: 520.97,
			y: 318.76
		},
		{
			x: 528.97,
			y: 318.76
		},
		{
			x: 536.97,
			y: 318.76
		},
		{
			x: 544.97,
			y: 318.76
		},
		{
			x: 552.97,
			y: 318.76
		},
		{
			x: 560.97,
			y: 318.76
		},
		{
			x: 568.97,
			y: 318.76
		},
		{
			x: 576.97,
			y: 318.76
		},
		{
			x: 584.97,
			y: 318.76
		},
		{
			x: 592.97,
			y: 318.76
		},
		{
			x: 600.97,
			y: 318.76
		},
		{
			x: 306.48,
			y: 321.24
		},
		{
			x: 314.48,
			y: 321.24
		},
		{
			x: 322.48,
			y: 321.24
		},
		{
			x: 330.48,
			y: 321.24
		},
		{
			x: 362.48,
			y: 321.24
		},
		{
			x: 370.48,
			y: 321.24
		},
		{
			x: 378.48,
			y: 321.24
		},
		{
			x: 386.48,
			y: 321.24
		},
		{
			x: 223.03,
			y: 326.76
		},
		{
			x: 231.03,
			y: 326.76
		},
		{
			x: 239.03,
			y: 326.76
		},
		{
			x: 247.03,
			y: 326.76
		},
		{
			x: 255.03,
			y: 326.76
		},
		{
			x: 435.45,
			y: 326.76
		},
		{
			x: 443.45,
			y: 326.76
		},
		{
			x: 451.45,
			y: 326.76
		},
		{
			x: 459.45,
			y: 326.76
		},
		{
			x: 467.45,
			y: 326.76
		},
		{
			x: 512.97,
			y: 326.76
		},
		{
			x: 520.97,
			y: 326.76
		},
		{
			x: 528.97,
			y: 326.76
		},
		{
			x: 536.97,
			y: 326.76
		},
		{
			x: 544.97,
			y: 326.76
		},
		{
			x: 552.97,
			y: 326.76
		},
		{
			x: 560.97,
			y: 326.76
		},
		{
			x: 568.97,
			y: 326.76
		},
		{
			x: 576.97,
			y: 326.76
		},
		{
			x: 584.97,
			y: 326.76
		},
		{
			x: 592.97,
			y: 326.76
		},
		{
			x: 600.97,
			y: 326.76
		},
		{
			x: 306.48,
			y: 329.24
		},
		{
			x: 314.48,
			y: 329.24
		},
		{
			x: 322.48,
			y: 329.24
		},
		{
			x: 330.48,
			y: 329.24
		},
		{
			x: 362.48,
			y: 329.24
		},
		{
			x: 370.48,
			y: 329.24
		},
		{
			x: 378.48,
			y: 329.24
		},
		{
			x: 386.48,
			y: 329.24
		},
		{
			x: 215.03,
			y: 334.76
		},
		{
			x: 223.03,
			y: 334.76
		},
		{
			x: 231.03,
			y: 334.76
		},
		{
			x: 239.03,
			y: 334.76
		},
		{
			x: 247.03,
			y: 334.76
		},
		{
			x: 427.45,
			y: 334.76
		},
		{
			x: 435.45,
			y: 334.76
		},
		{
			x: 443.45,
			y: 334.76
		},
		{
			x: 451.45,
			y: 334.76
		},
		{
			x: 459.45,
			y: 334.76
		},
		{
			x: 512.97,
			y: 334.76
		},
		{
			x: 520.97,
			y: 334.76
		},
		{
			x: 528.97,
			y: 334.76
		},
		{
			x: 536.97,
			y: 334.76
		},
		{
			x: 544.97,
			y: 334.76
		},
		{
			x: 552.97,
			y: 334.76
		},
		{
			x: 560.97,
			y: 334.76
		},
		{
			x: 568.97,
			y: 334.76
		},
		{
			x: 576.97,
			y: 334.76
		},
		{
			x: 584.97,
			y: 334.76
		},
		{
			x: 592.97,
			y: 334.76
		},
		{
			x: 600.97,
			y: 334.76
		},
		{
			x: 306.48,
			y: 337.24
		},
		{
			x: 314.48,
			y: 337.24
		},
		{
			x: 322.48,
			y: 337.24
		},
		{
			x: 330.48,
			y: 337.24
		},
		{
			x: 362.48,
			y: 337.24
		},
		{
			x: 370.48,
			y: 337.24
		},
		{
			x: 378.48,
			y: 337.24
		},
		{
			x: 386.48,
			y: 337.24
		},
		{
			x: 215.03,
			y: 342.76
		},
		{
			x: 223.03,
			y: 342.76
		},
		{
			x: 231.03,
			y: 342.76
		},
		{
			x: 239.03,
			y: 342.76
		},
		{
			x: 427.45,
			y: 342.76
		},
		{
			x: 435.45,
			y: 342.76
		},
		{
			x: 443.45,
			y: 342.76
		},
		{
			x: 451.45,
			y: 342.76
		},
		{
			x: 512.97,
			y: 342.76
		},
		{
			x: 520.97,
			y: 342.76
		},
		{
			x: 528.97,
			y: 342.76
		},
		{
			x: 536.97,
			y: 342.76
		},
		{
			x: 544.97,
			y: 342.76
		},
		{
			x: 552.97,
			y: 342.76
		},
		{
			x: 560.97,
			y: 342.76
		},
		{
			x: 568.97,
			y: 342.76
		},
		{
			x: 576.97,
			y: 342.76
		},
		{
			x: 584.97,
			y: 342.76
		},
		{
			x: 592.97,
			y: 342.76
		},
		{
			x: 600.97,
			y: 342.76
		},
		{
			x: 306.48,
			y: 345.24
		},
		{
			x: 314.48,
			y: 345.24
		},
		{
			x: 322.48,
			y: 345.24
		},
		{
			x: 330.48,
			y: 345.24
		},
		{
			x: 362.48,
			y: 345.24
		},
		{
			x: 370.48,
			y: 345.24
		},
		{
			x: 378.48,
			y: 345.24
		},
		{
			x: 386.48,
			y: 345.24
		},
		{
			x: 207.03,
			y: 350.76
		},
		{
			x: 215.03,
			y: 350.76
		},
		{
			x: 223.03,
			y: 350.76
		},
		{
			x: 231.03,
			y: 350.76
		},
		{
			x: 419.45,
			y: 350.76
		},
		{
			x: 427.45,
			y: 350.76
		},
		{
			x: 435.45,
			y: 350.76
		},
		{
			x: 443.45,
			y: 350.76
		},
		{
			x: 560.97,
			y: 350.76
		},
		{
			x: 568.97,
			y: 350.76
		},
		{
			x: 576.97,
			y: 350.76
		},
		{
			x: 584.97,
			y: 350.76
		},
		{
			x: 306.48,
			y: 353.24
		},
		{
			x: 314.48,
			y: 353.24
		},
		{
			x: 322.48,
			y: 353.24
		},
		{
			x: 330.48,
			y: 353.24
		},
		{
			x: 362.48,
			y: 353.24
		},
		{
			x: 370.48,
			y: 353.24
		},
		{
			x: 378.48,
			y: 353.24
		},
		{
			x: 386.48,
			y: 353.24
		},
		{
			x: 199.03,
			y: 358.76
		},
		{
			x: 207.03,
			y: 358.76
		},
		{
			x: 215.03,
			y: 358.76
		},
		{
			x: 223.03,
			y: 358.76
		},
		{
			x: 231.03,
			y: 358.76
		},
		{
			x: 411.45,
			y: 358.76
		},
		{
			x: 419.45,
			y: 358.76
		},
		{
			x: 427.45,
			y: 358.76
		},
		{
			x: 435.45,
			y: 358.76
		},
		{
			x: 443.45,
			y: 358.76
		},
		{
			x: 560.97,
			y: 358.76
		},
		{
			x: 568.97,
			y: 358.76
		},
		{
			x: 576.97,
			y: 358.76
		},
		{
			x: 584.97,
			y: 358.76
		},
		{
			x: 306.48,
			y: 361.24
		},
		{
			x: 314.48,
			y: 361.24
		},
		{
			x: 322.48,
			y: 361.24
		},
		{
			x: 330.48,
			y: 361.24
		},
		{
			x: 338.48,
			y: 361.24
		},
		{
			x: 354.48,
			y: 361.24
		},
		{
			x: 362.48,
			y: 361.24
		},
		{
			x: 370.48,
			y: 361.24
		},
		{
			x: 378.48,
			y: 361.24
		},
		{
			x: 386.48,
			y: 361.24
		},
		{
			x: 199.03,
			y: 366.76
		},
		{
			x: 207.03,
			y: 366.76
		},
		{
			x: 215.03,
			y: 366.76
		},
		{
			x: 223.03,
			y: 366.76
		},
		{
			x: 231.03,
			y: 366.76
		},
		{
			x: 239.03,
			y: 366.76
		},
		{
			x: 247.03,
			y: 366.76
		},
		{
			x: 255.03,
			y: 366.76
		},
		{
			x: 263.03,
			y: 366.76
		},
		{
			x: 271.03,
			y: 366.76
		},
		{
			x: 279.03,
			y: 366.76
		},
		{
			x: 411.45,
			y: 366.76
		},
		{
			x: 419.45,
			y: 366.76
		},
		{
			x: 427.45,
			y: 366.76
		},
		{
			x: 435.45,
			y: 366.76
		},
		{
			x: 443.45,
			y: 366.76
		},
		{
			x: 451.45,
			y: 366.76
		},
		{
			x: 459.45,
			y: 366.76
		},
		{
			x: 467.45,
			y: 366.76
		},
		{
			x: 475.45,
			y: 366.76
		},
		{
			x: 483.45,
			y: 366.76
		},
		{
			x: 491.45,
			y: 366.76
		},
		{
			x: 560.97,
			y: 366.76
		},
		{
			x: 568.97,
			y: 366.76
		},
		{
			x: 576.97,
			y: 366.76
		},
		{
			x: 584.97,
			y: 366.76
		},
		{
			x: 314.48,
			y: 369.24
		},
		{
			x: 322.48,
			y: 369.24
		},
		{
			x: 330.48,
			y: 369.24
		},
		{
			x: 338.48,
			y: 369.24
		},
		{
			x: 346.48,
			y: 369.24
		},
		{
			x: 354.48,
			y: 369.24
		},
		{
			x: 362.48,
			y: 369.24
		},
		{
			x: 370.48,
			y: 369.24
		},
		{
			x: 378.48,
			y: 369.24
		},
		{
			x: 199.03,
			y: 374.76
		},
		{
			x: 207.03,
			y: 374.76
		},
		{
			x: 215.03,
			y: 374.76
		},
		{
			x: 223.03,
			y: 374.76
		},
		{
			x: 231.03,
			y: 374.76
		},
		{
			x: 239.03,
			y: 374.76
		},
		{
			x: 247.03,
			y: 374.76
		},
		{
			x: 255.03,
			y: 374.76
		},
		{
			x: 263.03,
			y: 374.76
		},
		{
			x: 271.03,
			y: 374.76
		},
		{
			x: 279.03,
			y: 374.76
		},
		{
			x: 411.45,
			y: 374.76
		},
		{
			x: 419.45,
			y: 374.76
		},
		{
			x: 427.45,
			y: 374.76
		},
		{
			x: 435.45,
			y: 374.76
		},
		{
			x: 443.45,
			y: 374.76
		},
		{
			x: 451.45,
			y: 374.76
		},
		{
			x: 459.45,
			y: 374.76
		},
		{
			x: 467.45,
			y: 374.76
		},
		{
			x: 475.45,
			y: 374.76
		},
		{
			x: 483.45,
			y: 374.76
		},
		{
			x: 491.45,
			y: 374.76
		},
		{
			x: 560.97,
			y: 374.76
		},
		{
			x: 568.97,
			y: 374.76
		},
		{
			x: 576.97,
			y: 374.76
		},
		{
			x: 584.97,
			y: 374.76
		},
		{
			x: 314.48,
			y: 377.24
		},
		{
			x: 322.48,
			y: 377.24
		},
		{
			x: 330.48,
			y: 377.24
		},
		{
			x: 338.48,
			y: 377.24
		},
		{
			x: 346.48,
			y: 377.24
		},
		{
			x: 354.48,
			y: 377.24
		},
		{
			x: 362.48,
			y: 377.24
		},
		{
			x: 370.48,
			y: 377.24
		},
		{
			x: 378.48,
			y: 377.24
		},
		{
			x: 199.03,
			y: 382.76
		},
		{
			x: 207.03,
			y: 382.76
		},
		{
			x: 215.03,
			y: 382.76
		},
		{
			x: 223.03,
			y: 382.76
		},
		{
			x: 231.03,
			y: 382.76
		},
		{
			x: 239.03,
			y: 382.76
		},
		{
			x: 247.03,
			y: 382.76
		},
		{
			x: 255.03,
			y: 382.76
		},
		{
			x: 263.03,
			y: 382.76
		},
		{
			x: 271.03,
			y: 382.76
		},
		{
			x: 279.03,
			y: 382.76
		},
		{
			x: 411.45,
			y: 382.76
		},
		{
			x: 419.45,
			y: 382.76
		},
		{
			x: 427.45,
			y: 382.76
		},
		{
			x: 435.45,
			y: 382.76
		},
		{
			x: 443.45,
			y: 382.76
		},
		{
			x: 451.45,
			y: 382.76
		},
		{
			x: 459.45,
			y: 382.76
		},
		{
			x: 467.45,
			y: 382.76
		},
		{
			x: 475.45,
			y: 382.76
		},
		{
			x: 483.45,
			y: 382.76
		},
		{
			x: 491.45,
			y: 382.76
		},
		{
			x: 560.97,
			y: 382.76
		},
		{
			x: 568.97,
			y: 382.76
		},
		{
			x: 576.97,
			y: 382.76
		},
		{
			x: 584.97,
			y: 382.76
		},
		{
			x: 330.48,
			y: 385.24
		},
		{
			x: 338.48,
			y: 385.24
		},
		{
			x: 346.48,
			y: 385.24
		},
		{
			x: 354.48,
			y: 385.24
		},
		{
			x: 362.48,
			y: 385.24
		}
	],
	dotArray = [],
	INTERACTIVE = false, //change this for mouse move interaction at the end
	particleArray = [],
	dot = select(".dot"),
	lineTl = gsap.timeline(),
	line = select(".line"),
	currDotValue = null,
	nextDotValue = null,
	colorArray = [
		"fbf8cc",
		"fde4cf",
		"ffcfd2",
		"f1c0e8",
		"cfbaf0",
		"a3c4f3",
		"90dbf4",
		"8eecf5",
		"98f5e1",
		"b9fbc0"
	],
	pt = mainSVG.createSVGPoint(),
	mousePos = { x: 0, y: 0 },
	lineArr = [],
	visibleArea = {
		value: 260,
		offset: 0
	};

colorArray = colorArray.map((x) => (Array.from(x)[0] == "#" ? x : `#${x}`));
//gsap.utils.shuffle(pointArray)
function checkDistance(a, b) {
	let value = Math.hypot(a.x - b.x, a.y - b.y);
	return value < visibleArea.value
		? { value: value, result: true }
		: { value: false };
}
class Particle {
	constructor(x, y, shape, id, fill, newFill) {
		this.x = x;
		this.y = y;
		this.shape = shape;
		this.initX = this.x;
		this.initY = this.y;
		this.id = id;
		this.fill = fill;
		this.newFill = newFill;
	}
}
class Line {
	constructor(x1, y1, x2, y2, strokeColor, shape, parent) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.strokeColor = strokeColor;
		this.shape = shape;
		this.parent = parent;
	}
}

let pipeRadius = gsap.utils.pipe(
	gsap.utils.clamp(0, visibleArea.value / 2),
	gsap.utils.mapRange(0, visibleArea.value / 2, 12, 2)
);

gsap.set("svg", {
	visibility: "visible"
});

function cursorPoint(evt) {
	pt.x = evt.clientX;
	pt.y = evt.clientY;
	return pt.matrixTransform(mainSVG.getScreenCTM().inverse());
}

pointArray.forEach((i, c) => {
	let clone = dot.cloneNode(true);
	let p = new Particle(
		i.x,
		i.y,
		clone,
		c,
		colorArray[c % colorArray.length],
		null
	);
	particleArray.push(p);
	container.appendChild(clone);
	dotArray.push(clone);
	currDotValue = i;
	nextDotValue = c < pointArray.length - 1 ? pointArray[c + 1] : null;
	gsap.set(clone, {
		x: p.x,
		y: p.y,
		scale: 0,
		fill: p.fill,
		transformOrigin: "50% 50%"
		//svgOrigin: '400 300'
	});
	//console.log(currDotValue, nextDotValue)
	let tl = gsap.timeline();
	if (nextDotValue) {
		tl
			.fromTo(
				line,
				{
					attr: {
						x1: currDotValue.x,
						y1: currDotValue.y
					}
				},
				{
					attr: {
						x2: nextDotValue.x,
						y2: nextDotValue.y
					},
					stroke: p.fill,
					duration: 0.02
				}
			)
			.set(line, {
				attr: {
					x1: nextDotValue.x,
					y1: nextDotValue.y,
					x2: nextDotValue.x,
					y2: nextDotValue.y
				}
			})
			.to(clone, {
				scale: 1,
				duration: 0.02,
				ease: "elastic(0.96, 0.03)"
			});

		lineTl.add(tl, c / 100);
	} else {
		lineTl.set(line, {
			strokeWidth: 0
		});
	}
});

let endTl = gsap.timeline({ paused: false, onStart: function () {} });
endTl.to(dotArray, {
	attr: {
		r: 12
	},
	stagger: {
		each: 0.001,
		from: "center"
	},
	duration: 0.3,
	ease: "slow(0.3, 0.8, true)"
});

function calc() {
	let i = particleArray.length;
	let curr = null;
	while (--i > -1) {
		curr = particleArray[i];

		let deltaX = curr.x - mousePos.x;
		let deltaY = curr.y - mousePos.y;
		let angle = Math.atan2(deltaY, deltaX);
		let distance =
			(visibleArea.value * 2) / Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		curr.x += Math.cos(angle) * distance;
		curr.y += Math.sin(angle) * distance;
		curr.x += (curr.initX - curr.x) * 0.46;
		curr.y += (curr.initY - curr.y) * 0.46;

		gsap.set(curr.shape, {
			x: curr.x,
			y: curr.y
		});
		if (checkDistance(curr, mousePos).result) {
			gsap.set(curr.shape, {
				attr: {
					r: pipeRadius(checkDistance(curr, mousePos).value)
				}
			});
		}
	}
}

let leaderPos = gsap.getProperty("#leader");

function setMouseMove() {
	if (INTERACTIVE) {
		mainSVG.onpointermove = (e) => {
			mousePos.x = cursorPoint(e).x;
			mousePos.y = cursorPoint(e).y - visibleArea.offset;
		};
		mainSVG.onmousedown = null;
	} else {
		gsap.to("#leader", {
			motionPath: {
				path: "#drawPath",
				alignOrigin: [0.5, 0.5],
				align: "#drawPath"
			},
			onUpdate: function () {
				mousePos.x = leaderPos("x");
				mousePos.y = leaderPos("y");
			},
			duration: 14,
			ease: "none",
			repeat: -1
			//yoyo: true
		});
	}
	gsap.ticker.add(calc);
}
lineTl.add(endTl);
lineTl.vars.onComplete = setMouseMove;
gsap.globalTimeline.timeScale(1);

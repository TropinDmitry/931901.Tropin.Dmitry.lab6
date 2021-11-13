let lefttap = document.querySelector(".tap_left")
let righttap = document.querySelector(".tap_right")

let Left = () =>
{
	lefttap.style.width = "95%"
	righttap.style.width = "5%"
	lefttap.querySelector("img").style.display = "block"
	lefttap.querySelector("img").style.width = "75%"
	righttap.querySelector("img").style.display = "none"
}
let Right = () =>
{
	lefttap.style.width = "5%"
	righttap.style.width = "95%"
	righttap.querySelector("img").style.display = "block"
	righttap.querySelector("img").style.width = "75%"
	lefttap.querySelector("img").style.display = "none"
}
let Both = () =>
{
	lefttap.style.width = "50%"
	righttap.style.width = "50%"
	righttap.querySelector("img").style.display = "block"
	righttap.querySelector("img").style.width = "100%"
	lefttap.querySelector("img").style.display = "block"
	lefttap.querySelector("img").style.width = "100%"
}
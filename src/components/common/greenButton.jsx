import { IoIosArrowForward } from "react-icons/io";

export default function GreenButton(props) {
	return (
		<button className={`text-white bg-greenB flex gap-3 w-fit font-pRegular items-center rounded-full py-[0.8rem] px-[1.5rem] ${props.fontL ? 'text-[1.1rem]' : 'text-[0.85rem]'}`} onClick={props.click}>{props.text}
			<IoIosArrowForward size={20} />
		</button>
	)
}

export function GreenButtonSend(props) {
	return (
		<button className={`text-white bg-greenB text-center font-pRegular rounded-full px-[1.5rem] py-[0.8rem] text-[1.1rem]`} type={props.type} onClick={props.click}>{props.text}
		</button>
	)
}

export function GreenBorder(props) {
	return (
		<button className={"py-[0.8rem] px-[1.5rem] border-[0.88px] rounded-full w-fit border-[#1A5319] font-pRegular text-greenB text-[0.85rem]"}>{props.text}</button>
	)
}

export function CallNow() {
	return (
		<button className="text-white bg-greenB w-fit font-pRegular rounded-full py-[0.5rem] px-[1.5rem] text-[1rem]">Call Now</button>
	)
}

export function Quantity(props) {
	return (
		<ul className='flex rounded-[50px] border-[1px] py-[0.4rem] px-4 items-center w-fit text-[1.5rem] text-greenB border-greenB'>
			<li className='hvrPointer' onClick={props.minus}>-</li>
			<li className='px-[3rem]'>{props.quantity}</li>
			<li className='hvrPointer' onClick={props.plus}>+</li>
		</ul>
	)
}

import { shallow, mount } from "enzyme";

//-----> Components
import Header from "../Header";

// -----> images/logos
import domainLogo from "../../assets/images/DomainLogo.png";
import clientLogo from "../../assets/images/clientLogo.png";
import downArrowLogo from "../../assets/images/downArrow.png";

describe("header component test cases", () => {
	let header;
	beforeEach(() => {
		header = mount(
			<Header
				domainLogo={domainLogo}
				clientLogo={clientLogo}
				userName="VC"
				portalAdjacent1="Client Admin"
				portalAdjacent2="Portal"
				userData={{
					firstName: "Vamsi",
					lastName: "Chilukuri",
					role: "Assistant Loan Executive",
					currentLogin: {
						time: "3:12 PM",
						date: "12/03/2021",
					},
					lastLogin: {
						time: "4:30 PM",
						date: "10/03/2021",
					},
				}}
				downArrowLogo={downArrowLogo}
				optional={{
					notification: true,
					info: true,
					components: [
						{
							type: "dropDown",
							componentProperty: "roles",
							options: ["Admin", "Client"],
							method: (data) => console.log(data),
						},
						{
							type: "label",
							value: "check",
							method: (data) => console.log(data),
						},
						{
							type: "button",
							component: "Button",
							method: (data) => console.log(data),
						},
					],
				}}
			/>
		);
	});

	it("Domain logo, User description,  Client logo Components check", () => {
		expect(header.find("DomainLogo").length).toEqual(1);
		expect(header.find("UserDescription").length).toEqual(1);
		expect(header.find("ClientLogo").length).toEqual(1);
	});

	it("Role switch drop down options check", () => {
		expect(header.find(".roleDropDownUl").children()).toHaveLength(2);
		expect(header.find(".roleDropDownUl").childAt(0).key()).toBe("Admin");
		expect(header.find(".roleDropDownUl").childAt(1).key()).toBe("Client");
	});

	it("Optional label component", () => {
		expect(header.find(".label-block").text()).toBe("check");
	});

	it("Optional button component", () => {
		expect(header.find(".optional-button").text()).toContain("Button");
	});

	it("Render domain logo", () => {
		expect(header.find("#domainLogo").prop("src")).toEqual(domainLogo);
	});

	it("Render client logo", () => {
		expect(header.find(".client-logo").prop("src")).toEqual(clientLogo);
	});

	it("Render user description", () => {
		expect(header.find(".down-arrow").prop("src")).toEqual(downArrowLogo);
		expect(header.find(".user-profile-name").text()).toContain("VC");
	});
});

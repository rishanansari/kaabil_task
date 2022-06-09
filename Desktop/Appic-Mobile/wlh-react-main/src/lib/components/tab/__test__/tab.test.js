import { shallow, mount } from "enzyme";

//-----> Components
import Tab from "../Tab";

describe("tab component test cases", () => {
	it("Check main tab (Users) and sub tabs of it", () => {
		let tab = mount(
			<Tab
				tabs={["All Users", "Active", "Disabled", "Recently Added"]}
				buttonLabel="Add User"
				buttonMethod={() => {
					console.log("---> Button Click Successfully <---");
				}}
			/>
		);

		expect(tab.find(".tab-ul").children()).toHaveLength(4);
		expect(tab.find(".tab-ul").childAt(0).text()).toContain("All Users");
		expect(tab.find(".tab-ul").childAt(1).text()).toContain("Active");
		expect(tab.find(".tab-ul").childAt(2).text()).toContain("Disabled");
		expect(tab.find(".tab-ul").childAt(3).text()).toContain(
			"Recently Added"
		);

		expect(tab.find(".tab-button").text()).toContain("Add User");
	});

	it("Check main tab (Roles) and sub tabs of it", () => {
		let tab = mount(
			<Tab
				tabs={["All Roles", "Default", "Custom", "Recently Added"]}
				buttonLabel="Create Role"
				buttonMethod={() => {
					console.log("---> Button Click Successfully <---");
				}}
			/>
		);

		expect(tab.find(".tab-ul").children()).toHaveLength(4);
		expect(tab.find(".tab-ul").childAt(0).text()).toContain("All Roles");
		expect(tab.find(".tab-ul").childAt(1).text()).toContain("Default");
		expect(tab.find(".tab-ul").childAt(2).text()).toContain("Custom");
		expect(tab.find(".tab-ul").childAt(3).text()).toContain(
			"Recently Added"
		);

		expect(tab.find(".tab-button").text()).toContain("Create Role");
	});

	it("Check main tab (Hierarchies) and sub tabs of it", () => {
		let tab = mount(
			<Tab
				tabs={[
					"All Hierarchies",
					"Active",
					"Disabled",
					"Recently Added",
				]}
				buttonLabel="Add Hierarchy"
				buttonMethod={() => {
					console.log("---> Button Click Successfully <---");
				}}
			/>
		);

		expect(tab.find(".tab-ul").children()).toHaveLength(4);
		expect(tab.find(".tab-ul").childAt(0).text()).toContain(
			"All Hierarchies"
		);
		expect(tab.find(".tab-ul").childAt(1).text()).toContain("Active");
		expect(tab.find(".tab-ul").childAt(2).text()).toContain("Disabled");
		expect(tab.find(".tab-ul").childAt(3).text()).toContain(
			"Recently Added"
		);

		expect(tab.find(".tab-button").text()).toContain("Add Hierarchy");
		expect(tab.find(".tab-button").simulate("click"));
	});
});

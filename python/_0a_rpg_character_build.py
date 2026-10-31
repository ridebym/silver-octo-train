full_dot = '●'
empty_dot = '○'

def create_character(name, strength, intelligence, charisma):
	if not isinstance(name, str):
		return "The character name should be a string"
	if name == "":
		return "The character should have a name"
	if len(name) > 10:
		return "The character name is too long"
	if " " in name:
		return "The character name should not contain spaces"

	stats = (strength, intelligence, charisma)
	if any(not isinstance(stat, int) or isinstance(stat, bool) for stat in stats):
		return "All stats should be integers"
	if any(stat < 1 for stat in stats):
		return "All stats should be no less than 1"
	if any(stat > 4 for stat in stats):
		return "All stats should be no more than 4"
	if sum(stats) != 7:
		return "The character should start with 7 points"

	character = [name]
	for abbreviation, stat in zip(("STR", "INT", "CHA"), stats):
		character.append(f"{abbreviation} {'●' * stat}{'○' * (10 - stat)}")
	return "\n".join(character)

create_character1 = create_character("Aragorn", 3, 2, 2)                                                              
create_character2 = create_character("Legolas", 2, 3, 2)
create_character3 = create_character("Gimli", 4, 1, 2)
print(create_character1)
print(create_character2)
print(create_character3)

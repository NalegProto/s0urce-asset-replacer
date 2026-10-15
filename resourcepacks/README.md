# Resource pack list
If you want to install a resource packs I've either made or verified, or want to create your own, this is where you'll have all of that

## Installation
Will have to wait until the userscript is more advanced.

## Resource pack list
None, for now

## Make your own resource pack
This will have to wait until the script is more advanced, but there can still be docs on the json :
- `model` (number) : The loader's version this pack has been made for
- `packVersion` (number) : The resource pack's version
- `itemImages` (dict) : A dict containing all items with their images
  - `[item name]` (dict) : A dict for the two possible images of an item
    - `thumbnail` (string) : A 100x100 image used in Inventory, Computer, Target, and others
    - `full` (string) : A 400x400 image used in the item description popup
- `itemDescriptions` (dict) : A dict containing all items and their description
  - `[item name]` (string) : The description of that item
- `itemNames` (dict) : A dict containing all items and their names
  - `[item name]` (string) : The name of that item
- `profiles` (dict) : NPC names and their profiles
  - `[npc name]` (dict) : A dict containing this NPC's name and description
    - `name` (string) : This NPC's name
    - `description` (string) : This NPC's description

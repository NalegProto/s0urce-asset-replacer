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
- `pfps` (dict) : A dict of all PFPs.
  - `[pfp name]` (dict) : A dict for the two definitions of a PFP.
    - `image` (string) : The hover image of the PFP, a 400x400 file.
    - `thumbnail` (string) : A 100x100 image used in Inventory, Computer, Target, and others
- `items` (dict) : A dict of all items.

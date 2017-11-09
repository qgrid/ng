# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## [Unreleased]
- Revisit all cell editors.
- Get rid of cancel and save buttons in all cell editors, exceptions are: reference, file and image editors.
- Add clear button to file and image cell editors.
- Cell editors not limited by grid area.
- Edit keyboard navigation improvements.
- Handle space key down.

## [1.0.64] - 2017-09-11
### Added
- Start using changelog.
- To display grid title just write `<q-grid header="My Grid">`.
- Click `Revert Row` in Data Manipulation plugin menu restores origin values for the row.
- New property for array column `itemLabel` that can be used to display complex collection as a text.
- New column `widthMode` property is used to convert percents to px depend on a grid size, can be `relative` or `absolute`.
- New property `assertFactory` in filter model allows to change filter operator behavior for complex cases. 
- New `Save\Load` plugin, just add `<q-grid:persistence></q-grid:persistence>` inside of your grid, persistence model can be used for extension.
- Focus delay can be setup from attribute `q-grid:delay`. 

### Changed
- Column Filters and Column Chooser plugins start to behave as menus.
- Release scipt - base branch name as an argument `npm run release -- --base-branch model-save`.
- Column Chooser sarted to apply settings only after submit click.
- Remove reset button in Column Filter and Column Chooser plugins.

### Fixed
- Blank template is not showing on startup.
- Data Manipulation plugin not rewriting grid actions.

### Removed
- Client side column filter started to work with column labels, not values. Now you can just store value from `const filterBy = filter().by` and restore it by simply execute `filter({by: filterBy})`.

[Unreleased]: https://github.com/qgrid/ng/compare/v1.0.64...HEAD
[1.0.64]: https://github.com/qgrid/ng/compare/v1.0.64...v1.0.63

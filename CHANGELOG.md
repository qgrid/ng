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

## [1.0.65] - 2017-11-09
### Fixed
- ENV variable in min version is not defined.
- Added injector to PersistencePanelController.

## [1.0.64] - 2017-11-09
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

## [1.0.0] - 2017-11-09
### Added
- Demo application.
- Webpack build ES6.
- Linting with eslint.
- Karma tests.
- SCSS loader.
- CI\CD scripts.
- Add grid to npm.
- Add grid to bower.
- Theme support.
- Material theme that is used angular material inside.
- Grid service that allows to create grid model and get more control on the grid itself.
- Make grid header and footer sticky.
- Sticky footer.
- Top, left, right, bottom toolbars.
- Embed flex css framework, that was extracted from angular-material. 
- Auto generation modes for columns.
- Allow to reorder columns.
- Allow to resize columns.
- Allow to setup width of column in percents.
- Allow to have custom templates for cells in html.
- Column multi-sort support
- Column sort modes: single, multiple
- Column sorting depends on position
- Frozen columns.
- Custom.
- Array column type.
- Bool column type.
- Date column type.
- Email column type.
- Group column type.
- Number column type.
- Pad column type.
- Password column type.
- Pivot column type.
- Row indicator column type.
- Row number column type.
- Select column type.
- File column type.
- Time column type.
- Image column type.
- Url column type.
- Currency column type.
- Row options column type.
- Row expand column type.
- Row details column type.
- Reference column type.
- Id column type.
- Row details.
- Cell inline editing.
- Auto generation of row edit form.
- Cell navigation with keyboard.
- Mouse navigation.
- Style API to apply runtime style to the cells and rows.
- Row and cell highlighting.
- Initial implementation of virtual scrolling.
- Infinite scrolling.
- Focus cell API.
- Range selection.
- Row selection.
- Cell selection.
- Mix selection, when user can select row by clicking on row-indicator column or cell.
- Selection key that allows to reduce data row to some valuable thing.
- Selection modes: single and multiple.
- Keyboard editing support.
- Edit API.
- Autocomplete editor.
- Dropdown editor.
- Textarea editor.
- Column filter plugin.
- Initial filter row implementation.
- Filter API for custom filters.
- Column grouping.
- Custom hierarchy for grouping.
- Column pivoting.
- Import/Export to csv, excel and pdf.
- Column aggregation.
- Plugin system.
- Column chooser plugin.
- Popup plugin.
- Group bar plugin.
- Sort bar plugin.
- Selection bar plugin.
- Pivot bar plugin.
- Pager plugin.
- Progress plugin.
- Visibility plugin.
- Action bar plugin.
- Data manipulation plugin.

[Unreleased]: https://github.com/qgrid/ng/compare/v1.0.65...HEAD
[1.0.65]: https://github.com/qgrid/ng/compare/v1.0.64...v1.0.65
[1.0.64]: https://github.com/qgrid/ng/compare/v1.0.63...v1.0.64

// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview Namespace for publisher registration utilities.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';


/**
 * Namespace for publisher registration utilities.
 * @namespace
 * @exports lib/publishing/registry
 */
var registry = exports;


/**
 * Registers content publishers by publishers map.
 * @param {Object.<module:lib/publishing/IElementPublisher>} map Element
 *     publishers map.
 */
registry.registerPublishers = function(map) {
  if (!map) {
    throw Error('Illegal publishers map: ' + map);
  }

  if (map.CODE) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Code'), map.CODE);
  }

  if (map.CONTAINER) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Container'), map.CONTAINER);
  }

  if (map.CONTENTS_TABLE) {
    registry.registerElementPublisher(
        require(basePath + '/dom/ContentsTable'), map.CONTENTS_TABLE);
  }

  if (map.DEFINITION_LIST) {
    registry.registerElementPublisher(
        require(basePath + '/dom/DefinitionList'), map.DEFINITION_LIST);
  }

  if (map.DEFINITION) {
    registry.registerElementPublisher(
        require(basePath + '/dom/DefinitionList').Definition, map.DEFINITION);
  }

  if (map.DOCUMENT) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Document'), map.DOCUMENT);
  }

  if (map.ELEMENT_ARRAY) {
    registry.registerElementPublisher(
        require(basePath + '/dom/ElementArray'), map.ELEMENT_ARRAY);
  }

  if (map.INLINE_CODE) {
    registry.registerElementPublisher(
        require(basePath + '/dom/InlineCode'), map.INLINE_CODE);
  }

  if (map.LINK) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Link'), map.LINK);
  }

  if (map.LIST) {
    registry.registerElementPublisher(
        require(basePath + '/dom/List'), map.LIST);
  }

  if (map.LIST_ITEM) {
    registry.registerElementPublisher(
        require(basePath + '/dom/List').ListItem, map.LIST_ITEM);
  }

  if (map.PARAGRAPH) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Paragraph'), map.PARAGRAPH);
  }

  if (map.PREFORMATTED_PARAGRAPH) {
    registry.registerElementPublisher(
        require(basePath + '/dom/PreformattedParagraph'),
        map.PREFORMATTED_PARAGRAPH);
  }

  if (map.STRONG) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Strong'), map.STRONG);
  }

  if (map.TAG) {
    registry.registerElementPublisher(
        require(basePath + '/dom/Tag'), map.TAG);
  }
};


/**
 * Registers a content-publisher pair.
 * @param {module:lib/dom/IElement} content Element
 *     constructor to register.
 * @param {module:lib/dom/IElementPublisher} publisher Element
 *     publisher constructor to register.
 */
registry.registerElementPublisher = function(content, publisher) {
  content.publisher = publisher;
};

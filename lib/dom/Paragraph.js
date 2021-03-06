// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for paragraph elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var util = require(basePath + '/util');
var ElementArray = require(basePath + '/dom/ElementArray');
var BlockElement = require(basePath + '/dom/BlockElement');



/**
 * A class for paragraph elements.
 * @param {module:lib/dom/InlineElement|string} var_args Inline contents to
 *     append.
 * @constructor
 * @extends {module:lib/dom/BlockElement}
 * @exports lib/dom/Paragraph
 */
var Paragraph = function(var_args) {
  BlockElement.call(this);

  this.inlineElements_ = new ElementArray(this);

  if (var_args) {
    this.addInlineElements(Array.prototype.slice.call(arguments, 0));
  }
};
util.inherits(Paragraph, BlockElement);


/**
 * Default content publisher.
 * @type {module:lib/publishing/ParagraphPublisher}
 */
Paragraph.publisher = null;


/**
 * Inline contents in the paragraph.
 * @type {module:lib/dom/ElementArray.<module:lib/dom/InlineElement|string>}
 * @private
 */
Paragraph.prototype.inlineElements_;


/** @override */
Paragraph.prototype.setParent = function(parent) {
  BlockElement.prototype.setParent.call(this, parent);
  var refHelper = parent ? parent.getReferenceHelper() : null;

  this.inlineElements_.setReferenceHelper(refHelper);
  return this;
};


/**
 * Returns inline contents are in the paragraph.
 * @return {Array.<module:lib/dom/InlineElement|string>} Inline contents.
 */
Paragraph.prototype.getInlineElements = function() {
  return this.inlineElements_.getChildren();
};


/**
 * Adds inline contents at the last.
 * @param {Array.<module:lib/dom/InlineElement|string>} contents Inline
 *     contents or strings to add.
 * @return {module:lib/dom/Paragraph} This instance.
 */
Paragraph.prototype.addInlineElements = function(contents) {
  contents.forEach(function(content) {
    this.addInlineElement(content);
  }, this);
  return this;
};


/**
 * Adds an inline content at the last.
 * @param {module:lib/dom/InlineElement|string} content Inline content or
 *     string to add.
 * @return {module:lib/dom/Paragraph} This instance.
 */
Paragraph.prototype.addInlineElement = function(content) {
  this.inlineElements_.addChild(content);
  return this;
};


/**
 * Adds an inline content at the given 0-based index.
 * @param {module:lib/dom/InlineElement|string} content Inline content or
 *     string to add.
 * @param {number} index 0-based index.
 * @return {module:lib/dom/Paragraph} This instance.
 */
Paragraph.prototype.addInlineElementAt = function(content, index) {
  this.inlineElements_.addChildAt(content, index);
  return this;
};


/**
 * Removes the specified inline content from the paragraph.
 * @param {module:lib/dom/InlineElement|string} content Inline content or
 *     string to remove.
 * @return {module:lib/dom/InlineElement|string} Removed inline content, if
 *     any.
 */
Paragraph.prototype.removeInlineElement = function(content) {
  return this.inlineElements_.removeChild(content);
};


/**
 * Removes the specified inline content at the given 0-based index from the
 * paragraph.
 * @param {number} index 0-based index.
 * @return {module:lib/dom/InlineElement|string} Removed inline content, if
 *     any.
 */
Paragraph.prototype.removeInlineElementAt = function(index) {
  return this.inlineElements_.removeChildAt(index);
};


// Exports the constructor.
module.exports = Paragraph;

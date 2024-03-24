
class BaseResponse {
    /**
     * Represents a BaseResponse object.
     * @constructor
     * @param {Object} res - The response object.
     */
    constructor(res) {
        this.res = res;
    }

    /**
     * Sends a 201 response: Create object successful.
     * @param {string} id  - The id value to be included in the response.
     * @param {number} createdTime - The createdTime value to be included in the response.
     * If not provided, the current timestamp will be used.
     */
    _201(id, createdTime = new Date().getTime()) {
        this.res.status(201).json({ id, createdTime });
    }

    /**
     * Sends a 200 response: Success resource.
     */
    _200() {
        this.res.status(200).json({ success: true });
    }

    /**
     * Sends a 200 response: Success resource with data.
     * @param {Object} data - The data to be included in the response.
     */
    _200WithData(data) {
        this.res.status(200).json(data);
    }

    /**
     * Sends a 204 response: No content.
     */
    _204() {
        this.res.status(204).send();
    }

    /**
     * Sends a 400 response: Bad request / Invalid input.
     * @param {string} message - The message to be included in the response.
     */
    _400(message) {
        this.res.status(400).json({ message });
    }

    /**
     * Sends a 401 response: Unauthorized.
     */
    _401(message = 'Invalid token') {
        this.res.status(401).json({ message });
    }

    /**
     * Sends a 403 response: Not permitted.
     */
    _403() {
        this.res.status(403).json({ message: 'Forbidden' });
    }

    /**
     * Sends a 404 response: Not found.
     */
    _404() {
        this.res.status(404).json({ message: 'Not found' });
    }

    /**
     * Sends a 405 Method Not Allowed response.
     */
    _405() {
        this.res.status(405).json({ message: 'Method not allowed' });
    }

    /**
     * Sends a 409 Conflict response with a message.
     */
    _409() {
        this.res.status(409).json({ message: 'Conflict' });
    }

    /**
     * Sends a 500 response: Internal server error.
     */
    _500() {
        this.res.status(500).json({ message: 'Internal server error' });
    }
    
}

module.exports = BaseResponse;

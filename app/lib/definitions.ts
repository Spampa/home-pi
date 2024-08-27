import { JWTPayload } from 'jose';

export interface SessionPayload extends JWTPayload {
    username: String
    role: String
    expiresAt: Date
}
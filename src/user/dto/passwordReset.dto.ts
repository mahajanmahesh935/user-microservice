import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class SendPasswordResetLinkDto {

  @ApiProperty({ type: () => String, example: 'John' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: () => String, example: 'https://example.com' })
  @IsString()
  @IsNotEmpty()
  redirectUrl: string
}

export class ResetUserPasswordDto {
  userName: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}

export class ForgotPasswordDto {
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}


export class SendPasswordResetOTPDto {

  @ApiProperty({ type: () => String, example: 'John' })
  @IsString()
  @IsNotEmpty()
  username: string;
}

export class RequestPasswordResetDto {
  @ApiProperty({ type: () => String, example: 'user@example.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class CompletePasswordResetDto {
  @ApiProperty({ 
    type: () => String, 
    description: 'Keycloak action token from email link',
    example: 'eyJhbGciOiJSUzI1NiIsInR5cCI6...' 
  })
  @IsString()
  @IsNotEmpty()
  kc_token: string;

  @ApiProperty({ type: () => String, example: 'NewSecurePassword123!' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}

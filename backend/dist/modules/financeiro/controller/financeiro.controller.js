"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceiroController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const financeiro_service_1 = require("../service/financeiro.service");
let FinanceiroController = class FinanceiroController {
    constructor(financeiroService) {
        this.financeiroService = financeiroService;
    }
    async createFinanceiro(file) {
        return await this.financeiroService.createFinanceiro(file);
    }
    async findAllFinanceiro() {
        return this.financeiroService.findAllFinanceiro();
    }
};
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FinanceiroController.prototype, "createFinanceiro", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinanceiroController.prototype, "findAllFinanceiro", null);
FinanceiroController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [financeiro_service_1.FinanceiroService])
], FinanceiroController);
exports.FinanceiroController = FinanceiroController;
//# sourceMappingURL=financeiro.controller.js.map
/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { paramMock } from "../utils"

export function mockwebgl() {
  const WebGLContextAttributes = {
    brightness: '[PC preview] unknow brightness',
    alpha: '[PC preview] unknow alpha',
    depth: '[PC preview] unknow depth',
    stencil: '[PC preview] unknow stencil',
    antialias: '[PC preview] unknow antialias',
    premultipliedAlpha: '[PC preview] unknow premultipliedAlpha',
    preserveDrawingBuffer: '[PC preview] unknow preserveDrawingBuffer',
    powerPreference: '[PC preview] unknow powerPreference',
    failIfMajorPerformanceCaveat: '[PC preview] unknow failIfMajorPerformanceCaveat',
    desynchronized: '[PC preview] unknow desynchronized'
  }
  const float32ArrayWith2val = [
    paramMock.paramNumberMock, paramMock.paramNumberMock
  ]

  const float32ArrayWith4val = [
    paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock
  ]
  const int32ArrayWith2ele = [
    paramMock.paramNumberMock, paramMock.paramNumberMock
  ]
  const int32ArrayWith4ele = [
    paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock, paramMock.paramNumberMock
  ]
  const WebGLShaderArray = [
    WebGLShader, WebGLShader, WebGLShader
  ]
  const WebGLBuffer = {
  }
  const WebGLFramebuffer = {
  }
  const WebGLProgram = {
  }
  const WebGLRenderbuffer = {
  }
  const WebGLShader = {
  }
  const WebGLTexture = {
  }
  const WebGLUniformLocation = {
  }
  const WebGLActiveInfo = {
    size: '[PC preview] unknow size',
    type: '[PC preview] unknow type',
    name: '[PC preview] unknow name'
  }
  const WebGLShaderPrecisionFormat = {
    rangeMin: '[PC preview] unknow rangeMin',
    rangeMax: '[PC preview] unknow rangeMax',
    precision: '[PC preview] unknow precision'
  }
  const glParamMock = {
    paramDoubleMock: '[PC Preview] unknow double',
    paramAnyMock: '[PC Preview] unknow any',
    stringArray: '[PC preview] unknow stringArray',
    uint32Array: '[PC preview] unknow uint32Array',
    glBooleanArray: '[PC preview] unknow glBooleanArray',
    WebGLShaderArray: '[PC preview] unknow WebGLShaderArray',
  }
  const webglmock = {
    getContextAttributes: function (...args) {
      console.warn("webgl.getContextAttributes interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLContextAttributes
    },
    isContextLost: function (...args) {
      console.warn("webgl.isContextLost interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock
    },
    getSupportedExtensions: function (...args) {
      console.warn("webgl.getSupportedExtensions interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.stringArray
    },
    getExtension: function (...args) {
      console.warn("webgl.getExtension interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock
    },
    activeTexture: function (...args) {
      console.warn("webgl.activeTexture interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    attachShader: function (...args) {
      console.warn("webgl.attachShader interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindAttribLocation: function (...args) {
      console.warn("webgl.bindAttribLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindBuffer: function (...args) {
      console.warn("webgl.bindBuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindFramebuffer: function (...args) {
      console.warn("webgl.bindFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindRenderbuffer: function (...args) {
      console.warn("webgl.bindRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindTexture: function (...args) {
      console.warn("webgl.bindTexture interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    blendColor: function (...args) {
      console.warn("webgl.blendColor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    blendEquation: function (...args) {
      console.warn("webgl.blendEquation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    blendEquationSeparate: function (...args) {
      console.warn("webgl.blendEquationSeparate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    blendFunc: function (...args) {
      console.warn("webgl.blendFunc interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    blendFuncSeparate: function (...args) {
      console.warn("webgl.blendFuncSeparate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    checkFramebufferStatus: function (...args) {
      console.warn("webgl.checkFramebufferStatus interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock
    },
    clear: function (...args) {
      console.warn("webgl.clear interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearColor: function (...args) {
      console.warn("webgl.clearColor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearDepth: function (...args) {
      console.warn("webgl.clearDepth interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearStencil: function (...args) {
      console.warn("webgl.clearStencil interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    colorMask: function (...args) {
      console.warn("webgl.colorMask interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compileShader: function (...args) {
      console.warn("webgl.compileShader interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    copyTexImage2D: function (...args) {
      console.warn("webgl.copyTexImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    copyTexSubImage2D: function (...args) {
      console.warn("webgl.copyTexSubImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    createBuffer: function (...args) {
      console.warn("webgl.createBuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLBuffer;
    },
    createFramebuffer: function (...args) {
      console.warn("webgl.createFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLFramebuffer;
    },
    createProgram: function (...args) {
      console.warn("webgl.createProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLProgram;
    },
    createRenderbuffer: function (...args) {
      console.warn("webgl.createRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLRenderbuffer;
    },
    createShader: function (...args) {
      console.warn("webgl.createShader interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLShader;
    },
    createTexture: function (...args) {
      console.warn("webgl.createTexture interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLTexture;
    },
    cullFace: function (...args) {
      console.warn("webgl.cullFace interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    deleteBuffer: function (...args) {
      console.warn("webgl.deleteBuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    deleteFramebuffer: function (...args) {
      console.warn("webgl.deleteFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    deleteProgram: function (...args) {
      console.warn("webgl.deleteProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    deleteRenderbuffer: function (...args) {
      console.warn("webgl.deleteRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    deleteShader: function (...args) {
      console.warn("webgl.deleteRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    deleteTexture: function (...args) {
      console.warn("webgl.deleteRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    depthFunc: function (...args) {
      console.warn("webgl.deleteRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    depthMask: function (...args) {
      console.warn("webgl.deleteRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    depthRange: function (...args) {
      console.warn("webgl.depthRange interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    detachShader: function (...args) {
      console.warn("webgl.detachShader interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    disable: function (...args) {
      console.warn("webgl.disable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    disableVertexAttribArray: function (...args) {
      console.warn("webgl.disableVertexAttribArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    drawArrays: function (...args) {
      console.warn("webgl.drawArrays interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    drawElements: function (...args) {
      console.warn("webgl.drawElements interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    enable: function (...args) {
      console.warn("webgl.enable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    enableVertexAttribArray: function (...args) {
      console.warn("webgl.enableVertexAttribArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    finish: function (...args) {
      console.warn("webgl.finish interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    flush: function (...args) {
      console.warn("webgl.flush interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    framebufferRenderbuffer: function (...args) {
      console.warn("webgl.framebufferRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    framebufferTexture2D: function (...args) {
      console.warn("webgl.framebufferTexture2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    frontFace: function (...args) {
      console.warn("webgl.frontFace interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    generateMipmap: function (...args) {
      console.warn("webgl.generateMipmap interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getActiveAttrib: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLActiveInfo;
    },
    getActiveUniform: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLActiveInfo;
    },
    getAttachedShaders: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.WebGLShaderArray;
    },
    getAttribLocation: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getBufferParameter: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getParameter: function (...args) {
      console.warn("webgl.getActiveAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[0] == 0x0B73 || args[0] == 0x0B21 ||
        args[0] == 0x8038 || args[0] == 0x2A00 ||
        args[0] == 0x80AA) {
        return paramMock.paramNumberMock;
      } else if (args[0] == 0x8069 || args[0] == 0x8514) {
        return WebGLTexture;
      } else if (args[0] == 0x1F01 || args[0] == 0x8B8C ||
        args[0] == 0x1F00 || args[0] == 0x1F02) {
        return glParamMock.stringArray;
      } else if (args[0] == 0x8894 || args[0] == 0x8895) {
        return WebGLBuffer;
      } else if (args[0] == 0x8CA6) {
        return WebGLFramebuffer;
      } else if (args[0] == 0x8B8D) {
        return WebGLProgram;
      } else if (args[0] == 0x8CA7) {
        return WebGLRenderbuffer;
      } else if (args[0] == 0x846E || args[0] == 0x846D ||
        args[0] == 0x0B70) {
        return float32ArrayWith2val;
      } else if (args[0] == 0x0C22 || args[0] == 0x8005) {
        return float32ArrayWith4val;
      } else if (args[0] == 0x86A3) {
        return glParamMock.uint32Array;
      } else if (args[0] == 0x0D3A) {
        return int32ArrayWith2ele;
      } else if (args[0] == 0x0C10) {
        return int32ArrayWith4ele;
      } else if (args[0] == 0x0BE2 || args[0] == 0x0B44 || args[0] == 0x0B71 ||
        args[0] == 0x0B72 || args[0] == 0x0BD0 || args[0] == 0x8037 ||
        args[0] == 0x809E || args[0] == 0x80A0 ||
        args[0] == 0x80AB || args[0] == 0x0C11 || args[0] == 0x0B90 ||
        args[0] == 0x9240 ||
        args[0] == 0x9241) {
        return paramMock.paramBooleanMock;
      } else if (args[0] == 0x0C23) {
        return glParamMock.glBooleanArray;
      } else {
        return paramMock.paramNumberMock;
      }
    },
    getError: function (...args) {
      console.warn("webgl.getError interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getFramebufferAttachmentParameter: function (...args) {
      console.warn("webgl.getFramebufferAttachmentParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[2] == 0x8CD0 ||
        args[2] == 0x8CD2 ||
        args[2] == 0x8CD3 ||
        args[2] == 0x8215 ||
        args[2] == 0x8214 ||
        args[2] == 0x8210 ||
        args[2] == 0x8211 ||
        args[2] == 0x8216 ||
        args[2] == 0x8213 ||
        args[2] == 0x8212 ||
        args[2] == 0x8217 ||
        args[2] == 0x8CD4) {
        return paramMock.paramNumberMock;
      } else if (args[2] == 0x8CD1) {
        return paramMock.paramObjectMock;
      }
    },
    getProgramParameter: function (...args) {
      console.warn("webgl.getProgramParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[1] == 0x8B80 || args[1] == 0x8B82 || args[1] == 0x8B83) {
        return paramMock.paramBooleanMock;
      } else {
        return paramMock.paramNumberMock;
      }
    },
    getProgramInfoLog: function (...args) {
      console.warn("webgl.getProgramInfoLog interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    getRenderbufferParameter: function (...args) {
      console.warn("webgl.getRenderbufferParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },

    getShaderParameter: function (...args) {
      console.warn("webgl.getShaderParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[1] == 0x8B4F) {
        return paramMock.paramNumberMock;
      } else {
        return paramMock.paramBooleanMock;
      }
    },
    getShaderPrecisionFormat: function (...args) {
      console.warn("webgl.getShaderPrecisionFormat interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLShaderPrecisionFormat;
    },
    getShaderInfoLog: function (...args) {
      console.warn("webgl.getShaderInfoLog interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    getShaderSource: function (...args) {
      console.warn("webgl.getShaderSource interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    getTexParameter: function (...args) {
      console.warn("webgl.getTexParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[1] == 0x84FE) {
        return glParamMock.paramDoubleMock;
      } else {
        return paramMock.paramNumberMock;
      }
    },
    getUniform: function (...args) {
      console.warn("webgl.getUniform interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock;
    },
    getUniformLocation: function (...args) {
      console.warn("webgl.getUniformLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLUniformLocation;
    },
    getVertexAttrib: function (...args) {
      console.warn("webgl.getVertexAttrib interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    getVertexAttribOffset: function (...args) {
      console.warn("webgl.getVertexAttribOffset interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    hint: function (...args) {
      console.warn("webgl.hint interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    isBuffer: function (...args) {
      console.warn("webgl.isBuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isEnabled: function (...args) {
      console.warn("webgl.isEnabled interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isFramebuffer: function (...args) {
      console.warn("webgl.isFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isProgram: function (...args) {
      console.warn("webgl.isProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isRenderbuffer: function (...args) {
      console.warn("webgl.isRenderbuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },

    isShader: function (...args) {
      console.warn("webgl.isShader interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    isTexture: function (...args) {
      console.warn("webgl.isTexture interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    lineWidth: function (...args) {
      console.warn("webgl.lineWidth interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    linkProgram: function (...args) {
      console.warn("webgl.linkProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    pixelStorei: function (...args) {
      console.warn("webgl.pixelStorei interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    polygonOffset: function (...args) {
      console.warn("webgl.polygonOffset interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    renderbufferStorage: function (...args) {
      console.warn("webgl.renderbufferStorage interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    sampleCoverage: function (...args) {
      console.warn("webgl.sampleCoverage interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    scissor: function (...args) {
      console.warn("webgl.scissor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    shaderSource: function (...args) {
      console.warn("webgl.shaderSource interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    stencilFunc: function (...args) {
      console.warn("webgl.stencilFunc interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    stencilFuncSeparate: function (...args) {
      console.warn("webgl.stencilFuncSeparate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    stencilMask: function (...args) {
      console.warn("webgl.stencilMask interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    stencilMaskSeparate: function (...args) {
      console.warn("webgl.stencilMaskSeparate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    stencilOp: function (...args) {
      console.warn("webgl.stencilOp interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    stencilOpSeparate: function (...args) {
      console.warn("webgl.stencilOpSeparate interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texParameterf: function (...args) {
      console.warn("webgl.texParameterf interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texParameteri: function (...args) {
      console.warn("webgl.texParameteri interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1f: function (...args) {
      console.warn("webgl.uniform1f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2f: function (...args) {
      console.warn("webgl.uniform2f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    uniform3f: function (...args) {
      console.warn("webgl.uniform3f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4f: function (...args) {
      console.warn("webgl.uniform4f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1i: function (...args) {
      console.warn("webgl.uniform1i interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2i: function (...args) {
      console.warn("webgl.uniform2i interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3i: function (...args) {
      console.warn("webgl.uniform3i interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    uniform4i: function (...args) {
      console.warn("webgl.uniform4i interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    useProgram: function (...args) {
      console.warn("webgl.useProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    validateProgram: function (...args) {
      console.warn("webgl.validateProgram interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib1f: function (...args) {
      console.warn("webgl.vertexAttrib1f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib2f: function (...args) {
      console.warn("webgl.vertexAttrib2f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    vertexAttrib3f: function (...args) {
      console.warn("webgl.vertexAttrib3f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib4f: function (...args) {
      console.warn("webgl.vertexAttrib4f interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib1fv: function (...args) {
      console.warn("webgl.vertexAttrib1fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib2fv: function (...args) {
      console.warn("webgl.vertexAttrib2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttrib3fv: function (...args) {
      console.warn("webgl.vertexAttrib3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    vertexAttrib4fv: function (...args) {
      console.warn("webgl.vertexAttrib4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribPointer: function (...args) {
      console.warn("webgl.vertexAttribPointer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    viewport: function (...args) {
      console.warn("webgl.vertexAttrib3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    bufferData: function (...args) {
      console.warn("webgl.bufferData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bufferSubData: function (...args) {
      console.warn("webgl.bufferSubData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexImage2D: function (...args) {
      console.warn("webgl.compressedTexImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexSubImage2D: function (...args) {
      console.warn("webgl.compressedTexSubImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    readPixels: function (...args) {
      console.warn("webgl.readPixels interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    texImage2D: function (...args) {
      console.warn("webgl.texImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texSubImage2D: function (...args) {
      console.warn("webgl.texSubImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1fv: function (...args) {
      console.warn("webgl.uniform1fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2fv: function (...args) {
      console.warn("webgl.uniform2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3fv: function (...args) {
      console.warn("webgl.uniform3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    uniform4fv: function (...args) {
      console.warn("webgl.uniform4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1iv: function (...args) {
      console.warn("webgl.uniform1iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2iv: function (...args) {
      console.warn("webgl.uniform2iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3iv: function (...args) {
      console.warn("webgl.uniform3iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4iv: function (...args) {
      console.warn("webgl.uniform4iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },

    uniformMatrix2fv: function (...args) {
      console.warn("webgl.uniformMatrix2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix3fv: function (...args) {
      console.warn("webgl.uniformMatrix3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix4fv: function (...args) {
      console.warn("webgl.uniformMatrix4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    }
  }
  return webglmock
}
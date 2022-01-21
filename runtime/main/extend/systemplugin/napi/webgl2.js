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

export function mockwebgl2() {
  const WebGLQuery = {
  }
  const WebGLSampler = {
  }
  const WebGLSync = {
  }
  const WebGLTransformFeedback = {
  }
  const WebGLVertexArrayObject = {
  }
  const WebGLActiveInfo = {
    size: '[PC preview] unknow size',
    type: '[PC preview] unknow type',
    name: '[PC preview] unknow name'
  }
  const glParamMock = {
    paramDoubleMock: '[PC Preview] unknow double',
    paramAnyMock: '[PC Preview] unknow any',
    stringArray: '[PC preview] unknow stringArray',
    uint32Array: '[PC preview] unknow uint32Array',
    glBooleanArray: '[PC preview] unknow glBooleanArray',
    int32Array: '[PC preview] unknow int32Array',
    uintArray: '[PC preview] unknow uintArray'
  }
  const GL_SAMPLES = 0x80A9;
  const GL_QUERY_RESULT = 0x8866;
  const GL_QUERY_RESULT_AVAILABLE = 0x8867;
  const GL_TEXTURE_MAX_LOD = 0x813B;
  const GL_TEXTURE_MIN_LOD = 0x813A;
  const webgl2Mock = {
    copyBufferSubData: function (...args) {
      console.warn("webgl.copyBufferSubData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getBufferSubData: function (...args) {
      console.warn("webgl.getBufferSubData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    blitFramebuffer: function (...args) {
      console.warn("webgl.blitFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    framebufferTextureLayer: function (...args) {
      console.warn("webgl.framebufferTextureLayer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    invalidateFramebuffer: function (...args) {
      console.warn("webgl.invalidateFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    invalidateSubFramebuffer: function (...args) {
      console.warn("webgl.invalidateFramebuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    readBuffer: function (...args) {
      console.warn("webgl.readBuffer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getInternalformatParameter: function (...args) {
      console.warn("webgl.getInternalformatParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[2] == GL_SAMPLES) {
        return glParamMock.int32Array
      }
    },
    renderbufferStorageMultisample: function (...args) {
      console.warn("webgl.renderbufferStorageMultisample interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texStorage2D: function (...args) {
      console.warn("webgl.texStorage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texStorage3D: function (...args) {
      console.warn("webgl.texStorage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texImage3D: function (...args) {
      console.warn("webgl.texImage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texSubImage3D: function (...args) {
      console.warn("webgl.texSubImage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    copyTexSubImage3D: function (...args) {
      console.warn("webgl.copyTexSubImage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexImage3D: function (...args) {
      console.warn("webgl.compressedTexImage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexSubImage3D: function (...args) {
      console.warn("webgl.compressedTexSubImage3D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getFragDataLocation: function (...args) {
      console.warn("webgl.getFragDataLocation interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    uniform1ui: function (...args) {
      console.warn("webgl.uniform1ui interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2ui: function (...args) {
      console.warn("webgl.uniform2ui interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3ui: function (...args) {
      console.warn("webgl.uniform3ui interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4ui: function (...args) {
      console.warn("webgl.uniform4ui interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1uiv: function (...args) {
      console.warn("webgl.uniform1uiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2uiv: function (...args) {
      console.warn("webgl.uniform2uiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3uiv: function (...args) {
      console.warn("webgl.uniform3uiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4uiv: function (...args) {
      console.warn("webgl.uniform4uiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix3x2fv: function (...args) {
      console.warn("webgl.uniformMatrix3x2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix4x2fv: function (...args) {
      console.warn("webgl.uniformMatrix4x2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix2x3fv: function (...args) {
      console.warn("webgl.uniformMatrix2x3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix4x3fv: function (...args) {
      console.warn("webgl.uniformMatrix4x3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix2x4fv: function (...args) {
      console.warn("webgl.uniformMatrix2x4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix3x4fv: function (...args) {
      console.warn("webgl.uniformMatrix3x4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribI4i: function (...args) {
      console.warn("webgl.vertexAttribI4i interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribI4iv: function (...args) {
      console.warn("webgl.vertexAttribI4iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribI4ui: function (...args) {
      console.warn("webgl.vertexAttribI4ui interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribI4uiv: function (...args) {
      console.warn("webgl.vertexAttribI4uiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribIPointer: function (...args) {
      console.warn("webgl.vertexAttribIPointer interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    vertexAttribDivisor: function (...args) {
      console.warn("webgl.vertexAttribDivisor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    drawArraysInstanced: function (...args) {
      console.warn("webgl.drawArraysInstanced interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    drawElementsInstanced: function (...args) {
      console.warn("webgl.drawElementsInstanced interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    drawRangeElements: function (...args) {
      console.warn("webgl.drawRangeElements interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    drawBuffers: function (...args) {
      console.warn("webgl.drawBuffers interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearBufferfv: function (...args) {
      console.warn("webgl.clearBufferfv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearBufferiv: function (...args) {
      console.warn("webgl.clearBufferiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearBufferuiv: function (...args) {
      console.warn("webgl.clearBufferuiv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clearBufferfi: function (...args) {
      console.warn("webgl.clearBufferfi interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    createQuery: function (...args) {
      console.warn("webgl.createQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLQuery;
    },
    deleteQuery: function (...args) {
      console.warn("webgl.deleteQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isQuery: function (...args) {
      console.warn("webgl.isQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    beginQuery: function (...args) {
      console.warn("webgl.beginQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    endQuery: function (...args) {
      console.warn("webgl.endQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getQuery: function (...args) {
      console.warn("webgl2.getQuery interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLQuery;
    },
    getQueryParameter: function (...args) {
      console.warn("webgl2.getQueryParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[1] == GL_QUERY_RESULT) {
        return paramMock.paramNumberMock;
      } else if (args[1] == GL_QUERY_RESULT_AVAILABLE) {
        return paramMock.paramBooleanMock;
      }
    },
    createSampler: function (...args) {
      console.warn("webgl2.createSampler interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLSampler;
    },
    deleteSampler: function (...args) {
      console.warn("webgl2.deleteSampler interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isSampler: function (...args) {
      console.warn("webgl2.isSampler interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },

    bindSampler: function (...args) {
      console.warn("webgl2.bindSampler interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    samplerParameteri: function (...args) {
      console.warn("webgl2.samplerParameteri interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    samplerParameterf: function (...args) {
      console.warn("webgl2.samplerParameterf interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getSamplerParameter: function (...args) {
      console.warn("webgl2.getSamplerParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      if (args[1] == GL_TEXTURE_MAX_LOD || args[1] == GL_TEXTURE_MIN_LOD) {
        return glParamMock.paramDoubleMock;
      } else {
        return paramMock.paramNumberMock;
      }
    },
    fenceSync: function (...args) {
      console.warn("webgl2.fenceSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLSync;
    },
    isSync: function (...args) {
      console.warn("webgl2.isSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    deleteSync: function (...args) {
      console.warn("webgl2.deleteSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    clientWaitSync: function (...args) {
      console.warn("webgl2.clientWaitSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    waitSync: function (...args) {
      console.warn("webgl2.waitSync interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getSyncParameter: function (...args) {
      console.warn("webgl2.getSyncParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock;
    },
    createTransformFeedback: function (...args) {
      console.warn("webgl2.createTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLTransformFeedback;
    },
    deleteTransformFeedback: function (...args) {
      console.warn("webgl2.deleteTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isTransformFeedback: function (...args) {
      console.warn("webgl2.isTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    bindTransformFeedback: function (...args) {
      console.warn("webgl2.bindTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    beginTransformFeedback: function (...args) {
      console.warn("webgl2.beginTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    endTransformFeedback: function (...args) {
      console.warn("webgl2.endTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    transformFeedbackVaryings: function (...args) {
      console.warn("webgl2.transformFeedbackVaryings interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getTransformFeedbackVarying: function (...args) {
      console.warn("webgl2.getTransformFeedbackVarying interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLActiveInfo;
    },
    pauseTransformFeedback: function (...args) {
      console.warn("webgl2.pauseTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    resumeTransformFeedback: function (...args) {
      console.warn("webgl2.resumeTransformFeedback interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindBufferBase: function (...args) {
      console.warn("webgl2.bindBufferBase interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bindBufferRange: function (...args) {
      console.warn("webgl2.bindBufferRange interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    getIndexedParameter: function (...args) {
      console.warn("webgl2.getIndexedParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock;
    },
    getUniformIndices: function (...args) {
      console.warn("webgl2.getUniformIndices interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.uintArray;
    },
    getActiveUniforms: function (...args) {
      console.warn("webgl2.getActiveUniforms interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock;
    },
    getUniformBlockIndex: function (...args) {
      console.warn("webgl2.getUniformBlockIndex interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramNumberMock;
    },
    getActiveUniformBlockParameter: function (...args) {
      console.warn("webgl2.getActiveUniformBlockParameter interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return glParamMock.paramAnyMock;
    },
    getActiveUniformBlockName: function (...args) {
      console.warn("webgl2.getActiveUniformBlockName interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    uniformBlockBinding: function (...args) {
      console.warn("webgl2.uniformBlockBinding interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    createVertexArray: function (...args) {
      console.warn("webgl2.createVertexArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return WebGLVertexArrayObject;
    },
    deleteVertexArray: function (...args) {
      console.warn("webgl2.deleteVertexArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    isVertexArray: function (...args) {
      console.warn("webgl2.isVertexArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
      return paramMock.paramBooleanMock;
    },
    bindVertexArray: function (...args) {
      console.warn("webgl2.bindVertexArray interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bufferData: function (...args) {
      console.warn("webgl2.bufferData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    bufferSubData: function (...args) {
      console.warn("webgl2.bufferSubData interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texImage2D: function (...args) {
      console.warn("webgl2.texImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    texSubImage2D: function (...args) {
      console.warn("webgl2.texSubImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexImage2D: function (...args) {
      console.warn("webgl2.compressedTexImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    compressedTexSubImage2D: function (...args) {
      console.warn("webgl2.compressedTexSubImage2D interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1fv: function (...args) {
      console.warn("webgl2.uniform1fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2fv: function (...args) {
      console.warn("webgl2.uniform2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3fv: function (...args) {
      console.warn("webgl2.uniform3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4fv: function (...args) {
      console.warn("webgl2.uniform4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform1iv: function (...args) {
      console.warn("webgl2.uniform1iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform2iv: function (...args) {
      console.warn("webgl2.uniform2iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform3iv: function (...args) {
      console.warn("webgl2.uniform3iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniform4iv: function (...args) {
      console.warn("webgl2.uniform4iv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix2fv: function (...args) {
      console.warn("webgl2.uniformMatrix2fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix3fv: function (...args) {
      console.warn("webgl2.uniformMatrix3fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    uniformMatrix4fv: function (...args) {
      console.warn("webgl2.uniformMatrix4fv interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    },
    readPixels: function (...args) {
      console.warn("webgl2.readPixels interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    }
  }
  return webgl2Mock;

}